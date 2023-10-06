import { gql, useQuery } from '@apollo/client';
import { ITEMS_PER_PAGE } from 'config/constant';
import { AddContactType } from 'types/public';
import { useDebounce } from 'use-debounce';

interface IContactType extends AddContactType {
  id: number;
}

type ContactParams = {
  limit?: number;
  offset?: number;
  search?: string;
  takeouts?: number[];
  findByIds?: number[];
};

export const GET_CONTACT_LIST = gql`
  query GetContactList(
    $distinct_on: [contact_select_column!]
    $limit: Int
    $offset: Int
    $order_by: [contact_order_by!]
    $where: contact_bool_exp
  ) {
    contact(distinct_on: $distinct_on, limit: $limit, offset: $offset, order_by: $order_by, where: $where) {
      id
      first_name
      last_name
      phones {
        number
      }
      created_at
    }
  }
`;

export const useGetContactList = (params?: ContactParams) => {
  const { limit = ITEMS_PER_PAGE, offset = 0, search = '', takeouts = [], findByIds = [] } = params || {};
  const [value] = useDebounce(search, 1000);

  return useQuery<{ contact: IContactType[] }>(GET_CONTACT_LIST, {
    variables: {
      limit,
      offset,
      where: {
        first_name: { _like: `%${value}%` },
        id: {
          ...(takeouts.length && { _nin: takeouts }),
          ...(findByIds.length && { _in: findByIds })
        }
      }
    }
  });
};

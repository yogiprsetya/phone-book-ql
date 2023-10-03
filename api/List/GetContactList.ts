import { gql, useQuery } from '@apollo/client';
import { ITEMS_PER_PAGE } from 'config/constant';
import { useDebounce } from 'use-debounce';

type ContactType = {
  id: number;
  first_name: string;
  last_name: string;
  created_at: string;
};

type ContactParams = {
  limit?: number;
  offset?: number;
  search?: string;
};

const GET_CONATCT_LIST = gql`
  query GetContactList(
    $distinct_on: [contact_select_column!]
    $limit: Int
    $offset: Int
    $order_by: [contact_order_by!]
    $where: contact_bool_exp
  ) {
    contact(distinct_on: $distinct_on, limit: $limit, offset: $offset, order_by: $order_by, where: $where) {
      created_at
      first_name
      id
      last_name
      phones {
        number
      }
    }
  }
`;

export const useGetContactList = (params?: ContactParams) => {
  const { limit = ITEMS_PER_PAGE, offset = 0, search } = params || {};
  const [value] = useDebounce(search, 1000);

  return useQuery<{ contact: ContactType[] }>(GET_CONATCT_LIST, {
    variables: {
      limit,
      offset,
      where: {
        first_name: { _like: `%${value}%` }
      }
    }
  });
};

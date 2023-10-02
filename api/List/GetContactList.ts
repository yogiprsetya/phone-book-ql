import { gql, useQuery } from '@apollo/client';

type ContactType = {
  id: number;
  first_name: string;
  last_name: string;
  created_at: string;
};

type ContactParams = {
  limit?: number;
  offset?: string;
  last_name?: string;
  created_at?: string;
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

export const useGetContactList = () =>
  useQuery<{ contact: ContactType[] }, ContactParams>(GET_CONATCT_LIST, {
    variables: {
      limit: 10
    }
  });

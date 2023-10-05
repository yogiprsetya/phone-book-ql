import { gql, useQuery } from '@apollo/client';

const GET_CONTACT_DETAIL = gql`
  query GetContactDetail($id: Int!) {
    contact_by_pk(id: $id) {
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

export const useGetContactDetail = (id: number) => {
  return useQuery(GET_CONTACT_DETAIL, {
    variables: {
      id
    }
  });
};

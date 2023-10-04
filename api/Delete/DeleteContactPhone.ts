import { gql, useMutation } from '@apollo/client';
import { useCallback } from 'react';

const DELETE_CONTACT = gql`
  mutation MyMutation($id: Int!) {
    delete_contact_by_pk(id: $id) {
      first_name
      last_name
      id
    }
  }
`;

export const useDeleteContactMutation = () => {
  const [mutation, { loading, error }] = useMutation<{ id: number }>(DELETE_CONTACT);

  const handleMutate = useCallback(
    async (id: number) => {
      const mutate = await mutation({
        variables: {
          id
        }
      });

      return {
        data: mutate.data,
        success: mutate.data?.hasOwnProperty('delete_contact_by_pk')
      };
    },

    [mutation]
  );

  return {
    mutation: handleMutate,
    loading,
    error
  };
};

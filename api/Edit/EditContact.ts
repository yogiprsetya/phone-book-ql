import { gql, useMutation } from '@apollo/client';
import { useCallback } from 'react';
import { EditContactType } from 'types/public';

const EDIT_CONTACT = gql`
  mutation EditContactById($id: Int!, $_set: contact_set_input) {
    update_contact_by_pk(pk_columns: { id: $id }, _set: $_set) {
      id
      first_name
      last_name
      phones {
        number
      }
    }
  }
`;

export const useEditContact = () => {
  const [mutation, { loading, error }] = useMutation<EditContactType>(EDIT_CONTACT);

  const handleMutate = useCallback(
    async (form: Omit<EditContactType, 'phones'>) => {
      const mutate = await mutation({
        variables: {
          id: form.id,
          _set: {
            first_name: form.first_name,
            last_name: form.last_name
          }
        }
      });

      return {
        data: mutate.data,
        success: mutate.data?.hasOwnProperty('update_contact_by_pk')
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

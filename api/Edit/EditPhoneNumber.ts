import { gql, useMutation } from '@apollo/client';
import { useCallback } from 'react';
import { IncomingPhonesType } from 'types/public';

type EditPhoneNumberType = {
  id: number;
  phone: IncomingPhonesType[];
};

const EDIT_PHONE_NUMBER = gql`
  mutation EditPhoneNumber($pk_columns: phone_pk_columns_input!, $new_phone_number: String!) {
    update_phone_by_pk(pk_columns: $pk_columns, _set: { number: $new_phone_number }) {
      contact {
        id
        last_name
        first_name
        created_at
        phones {
          number
        }
      }
    }
  }
`;

export const useEditPhoneNumber = () => {
  const [mutation, { loading, error }] = useMutation<EditPhoneNumberType>(EDIT_PHONE_NUMBER);

  const handleMutate = useCallback(
    async (form: EditPhoneNumberType) => {
      const numbers = form.phone.map((item) => {
        return mutation({
          variables: {
            pk_columns: {
              contact_id: form.id,
              number: item.current
            },
            new_phone_number: item.new
          }
        });
      });

      const asyncs = await Promise.allSettled(numbers);

      return {
        data: asyncs,
        success: asyncs.filter((i) => i.status === 'fulfilled').length === form.phone.length,
        errors: asyncs.filter((i) => i.status === 'rejected')
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

import { gql, useMutation } from '@apollo/client';
import { useCallback } from 'react';

type AddNumberToContactType = {
  contact_id: number;
  phone_number: string;
};

const ADD_NUMBER_TO_CONTACT = gql`
  mutation AddNumberToContact($contact_id: Int!, $phone_number: String!) {
    insert_phone(objects: { contact_id: $contact_id, number: $phone_number }) {
      returning {
        contact {
          id
          last_name
          first_name
          phones {
            number
          }
        }
      }
    }
  }
`;

export const useAddNumberToContact = () => {
  const [mutation, { loading, error }] = useMutation<AddNumberToContactType>(ADD_NUMBER_TO_CONTACT);

  const handleMutate = useCallback(
    async (form: AddNumberToContactType[]) => {
      const numbers = form.map((item) => {
        return mutation({
          variables: item
        });
      });

      const asyncs = await Promise.allSettled(numbers);

      return {
        data: asyncs,
        success: asyncs.filter((i) => i.status === 'fulfilled').length === form.length,
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

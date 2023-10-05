import { gql, useMutation } from '@apollo/client';
import { useCallback } from 'react';

type PhonesType = {
  number: string;
};

export type ContactType = {
  first_name: string;
  last_name: string;
  phones: PhonesType[];
};

const ADD_CONTACT_WITH_PHONES = gql`
  mutation AddContactWithPhones($first_name: String!, $last_name: String!, $phones: [phone_insert_input!]!) {
    insert_contact(objects: { first_name: $first_name, last_name: $last_name, phones: { data: $phones } }) {
      returning {
        first_name
        last_name
        id
        phones {
          number
        }
      }
    }
  }
`;

export const useAddContactWithPhones = () => {
  const [mutation, { loading, error }] = useMutation<ContactType>(ADD_CONTACT_WITH_PHONES);

  const handleMutate = useCallback(
    async (form: ContactType) => {
      const mutate = await mutation({
        variables: form
      });

      return {
        data: mutate.data,
        success: mutate.data?.hasOwnProperty('insert_contact')
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

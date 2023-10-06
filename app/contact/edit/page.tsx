'use client';

import { DynamicNoSSR } from 'components/layout/DynamicNoSSR';
import { ManageContact } from '../_ManageContact';
import { useSearchParams } from 'next/navigation';
import { Main } from 'components/layout/Main';
import { useGetContactDetail } from 'api/List/GetContactDetail';
import { Text } from 'components/core/Text';
import { useEditPhoneNumber } from 'api/Edit/EditPhoneNumber';
import { useEditContact } from 'api/Edit/EditContact';
import { useCallback } from 'react';
import { IMutateContact } from 'types/public';
import { useAddNumberToContact } from 'api/Create/AddNumberToContact';

const EditContact = () => {
  const searchParams = useSearchParams();
  const contactId = searchParams.get('id');
  const { data, loading } = useGetContactDetail(Number(contactId));
  const { mutation: phonesMutate } = useEditPhoneNumber();
  const { mutation: contactMutate } = useEditContact();
  const { mutation: addNumberMutate } = useAddNumberToContact();

  const handleContactUpdate = useCallback(
    async (form: IMutateContact) => {
      const promiseChanges = [];

      if (form.isAnyChanges) {
        promiseChanges.push(
          contactMutate({
            id: form.id,
            first_name: form.first_name,
            last_name: form.last_name
          })
        );
      }

      if (form.isPhoneChanges) {
        promiseChanges.push(
          phonesMutate({
            id: form.id,
            phone: form.phones.filter((f) => !!f.current).map((p) => ({ current: p.current, new: p.new }))
          })
        );

        if (form.phones.filter((f) => !f.current).length) {
          promiseChanges.push(
            addNumberMutate(
              form.phones.filter((f) => !f.current).map((p) => ({ contact_id: form.id, phone_number: p.new }))
            )
          );
        }
      }

      const asyncMutate = await Promise.all(promiseChanges).then((res) => res);

      return {
        success: !!asyncMutate
      };
    },
    [addNumberMutate, contactMutate, phonesMutate]
  );

  if (loading) {
    return (
      <Main>
        <Text>Fetch data ...</Text>
      </Main>
    );
  }

  if (!data.contact_by_pk) {
    return (
      <Main>
        <Text>Contact not found!</Text>
      </Main>
    );
  }

  return (
    <Main>
      <ManageContact
        title={`Edit Contact ${contactId}`}
        contactData={data.contact_by_pk}
        onEditMutate={handleContactUpdate}
      />
    </Main>
  );
};

export default DynamicNoSSR(EditContact);

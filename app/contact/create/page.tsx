'use client';

import { DynamicNoSSR } from 'components/layout/DynamicNoSSR';
import { ManageContact } from '../_ManageContact';
import { Main } from 'components/layout/Main';
import { useAddContactWithPhones } from 'api/Create/AddContactWithPhones';

const CreateContact = () => {
  const { mutation } = useAddContactWithPhones();

  return (
    <Main>
      <ManageContact title="Create Contact" onAddMutate={mutation} />
    </Main>
  );
};

export default DynamicNoSSR(CreateContact);

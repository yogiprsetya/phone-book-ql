'use client';

import { DynamicNoSSR } from 'components/layout/DynamicNoSSR';
import { ManageContact } from '../_ManageContact';

const CreateContact = () => {
  return <ManageContact title="Create Contact" />;
};

export default DynamicNoSSR(CreateContact);

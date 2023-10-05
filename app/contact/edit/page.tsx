'use client';

import { DynamicNoSSR } from 'components/layout/DynamicNoSSR';
import { ManageContact } from '../_ManageContact';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const EditContact = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const contactId = searchParams.get('id');

  useEffect(() => {
    if (!contactId) router.push('/contact/create');
  }, [contactId, router]);

  if (!contactId) return null;

  return <ManageContact title={`Edit Contact ${contactId}`} contactId={contactId} />;
};

export default DynamicNoSSR(EditContact);

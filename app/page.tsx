'use client';

import { useGetContactList } from 'api/List/GetContactList';
import { Text } from 'components/core/Text';

export default function Home() {
  const { data } = useGetContactList();
  console.log(data);

  return (
    <>
      <Text variant="headline-1">Contact List</Text>
    </>
  );
}

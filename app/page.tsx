'use client';

import { useGetContactList } from 'api/List/GetContactList';
import { Button } from 'components/core/Button';
import { Text } from 'components/core/Text';

export default function Home() {
  const { data } = useGetContactList();
  console.log(data);

  return (
    <>
      <Text tag="h1" variant="headline-1">
        Contact List
      </Text>

      <Button variant="danger">TEST</Button>
    </>
  );
}

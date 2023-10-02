'use client';

import { useGetContactList } from 'api/List/GetContactList';
import { ContactCard } from 'components/common/ContactCard';
import { Text } from 'components/core/Text';

export default function Home() {
  const { data, loading } = useGetContactList();
  console.log(data);

  return (
    <>
      <div className="w-8/12">
        <Text tag="h1" variant="headline-1" className="mb-8">
          Contact List
        </Text>

        {loading ? (
          <p>Loading ...</p>
        ) : (
          <div className="flex flex-col gap-2 pr-4">
            {data?.contact?.map((c) => (
              <ContactCard key={c.id} id={c.id} name={`${c.first_name} ${c.last_name}`} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

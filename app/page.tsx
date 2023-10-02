'use client';

import { useGetContactList } from 'api/List/GetContactList';
import { ContactCard } from 'components/common/ContactCard';
import { Input } from 'components/core/Input';
import { Text } from 'components/core/Text';
import { Main } from 'components/layout/Main';

export default function Home() {
  const { data, loading } = useGetContactList();
  console.log(data);

  return (
    <Main>
      <Text tag="h1" variant="headline-1" className="mb-8">
        Contact List
      </Text>

      <div className="flex max-md:flex-col-reverse">
        <div className="md:w-8/12 w-full">
          {loading ? (
            <p>Loading ...</p>
          ) : (
            <div className="flex flex-col gap-2 md:pr-4">
              {data?.contact?.map((c) => (
                <ContactCard key={c.id} id={c.id} name={`${c.first_name} ${c.last_name}`} />
              ))}
            </div>
          )}
        </div>

        <div className="grow p-2 border rounded-sm max-md:mb-6">
          <Input placeholder="Search contact" />
        </div>
      </div>
    </Main>
  );
}

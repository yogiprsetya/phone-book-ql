'use client';

import { useGetContactList } from 'api/List/GetContactList';
import { ContactCard } from 'components/common/ContactCard';
import { Pagination } from 'components/common/Pagination';
import { Input } from 'components/core/Input';
import { Text } from 'components/core/Text';
import { Main } from 'components/layout/Main';
import { ITEMS_PER_PAGE } from 'config/constant';
import { useState } from 'react';

const Home = () => {
  const [page, setPage] = useState<number>(0);
  const [keyword, setKeyword] = useState<string>('');

  const { data, loading } = useGetContactList({
    search: keyword,
    limit: ITEMS_PER_PAGE,
    offset: page * ITEMS_PER_PAGE
  });

  const items = data?.contact || [];

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
          <Input placeholder="Search contact" onChange={(e) => setKeyword(e.target.value)} />

          <Pagination
            isLoading={loading}
            className="mt-8"
            currentPage={page}
            totalPages={Math.ceil(items.length / ITEMS_PER_PAGE)}
            onNextPage={() => setPage((prevPage) => prevPage + 1)}
            onPrevPage={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
          />
        </div>
      </div>
    </Main>
  );
};

export default Home;

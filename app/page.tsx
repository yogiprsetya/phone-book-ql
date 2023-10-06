'use client';

import { useGetContactList } from 'api/List/GetContactList';
import { ContactCard } from 'components/common/ContactCard';
import { Pagination } from 'components/common/Pagination';
import { Input } from 'components/core/Input';
import { Text } from 'components/core/Text';
import { DynamicNoSSR } from 'components/layout/DynamicNoSSR';
import { Main } from 'components/layout/Main';
import { ITEMS_PER_PAGE } from 'config/constant';
import { useState } from 'react';
import { collection } from 'services/Collection';

const Home = () => {
  const [page, setPage] = useState<number>(1);
  const [keyword, setKeyword] = useState<string>('');

  const { data, loading, refetch, fetchMore } = useGetContactList({
    search: keyword,
    limit: ITEMS_PER_PAGE,
    offset: 0,
    takeouts: collection.getAll()
  });

  const handleLoadMore = (newPage: number) => {
    fetchMore({
      variables: { offset: newPage },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;

        return {
          contact: fetchMoreResult.contact
        };
      }
    });

    setPage(newPage);
  };

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
              {items.map((c) => (
                <ContactCard
                  key={c.id}
                  id={c.id}
                  onActionSuccess={refetch}
                  name={`${c.first_name} ${c.last_name}`}
                  number={c.phones[0].number}
                />
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
            totalItems={items.length}
            onPrevPage={() => handleLoadMore(page - 1)}
            onNextPage={() => handleLoadMore(page + 1)}
          />
        </div>
      </div>
    </Main>
  );
};

export default DynamicNoSSR(Home);

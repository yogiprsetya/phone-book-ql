'use client';

import { useGetContactList } from 'api/List/GetContactList';
import { ContactCard } from 'components/common/ContactCard';
import { Pagination } from 'components/common/Pagination';
import { Text } from 'components/core/Text';
import { DynamicNoSSR } from 'components/layout/DynamicNoSSR';
import { Main } from 'components/layout/Main';
import { ITEMS_PER_PAGE } from 'config/constant';
import { useState } from 'react';
import { collection } from 'services/Collection';

const Favorite = () => {
  const [page, setPage] = useState<number>(0);

  const { data, loading, refetch } = useGetContactList({
    limit: ITEMS_PER_PAGE,
    offset: page * ITEMS_PER_PAGE,
    findByIds: collection.getAll()
  });

  const items = data?.contact || [];

  return (
    <Main>
      <Text tag="h1" variant="headline-1" className="mb-8">
        Favorite Contacts
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
                  onActionSuccess={() => {
                    collection.getAll();
                    refetch();
                  }}
                  name={`${c.first_name} ${c.last_name}`}
                  number={c.phones[0] && c.phones[0].number}
                />
              ))}
            </div>
          )}
        </div>

        <div className="grow p-2 border rounded-sm max-md:mb-6">
          <Pagination
            isLoading={loading}
            currentPage={page}
            totalItems={items.length}
            onNextPage={() => setPage((prevPage) => prevPage + 1)}
            onPrevPage={() => setPage((prevPage) => prevPage - 1)}
          />
        </div>
      </div>
    </Main>
  );
};

export default DynamicNoSSR(Favorite);

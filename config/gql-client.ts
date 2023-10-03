'use client';

import { ApolloClient, InMemoryCache } from '@apollo/client';

export const createApolloClient = () => {
  return new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GQL_HOST,
    cache: new InMemoryCache()
  });
};

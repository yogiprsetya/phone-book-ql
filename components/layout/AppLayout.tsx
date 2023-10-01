'use client';

/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, useTheme } from '@emotion/react';
import { ReactNode } from 'react';
import { ApolloProvider } from '@apollo/client';
import { createApolloClient } from 'gql/client';

type Props = {
  children: ReactNode;
};

export const AppLayout = (props: Props) => {
  const client = createApolloClient();
  const { colors } = useTheme();

  return (
    <ApolloProvider client={client}>
      <div
        css={{
          display: 'flex',
          maxHeight: '100vh',
          color: colors.text.body,

          '& > main': {
            margin: 32,
            flexGrow: 1
          }
        }}
      >
        {props.children}
      </div>
    </ApolloProvider>
  );
};

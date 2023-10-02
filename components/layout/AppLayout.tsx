'use client';

import { styled } from 'twin.macro';
import { ReactNode } from 'react';
import { ApolloProvider } from '@apollo/client';
import { createApolloClient } from 'gql/client';

type Props = {
  children: ReactNode;
};

const AppLayoutStyled = styled('div')((props) => ({
  display: 'flex',
  maxHeight: '100vh',
  color: props.theme.colors.text.body,

  '& > main': {
    margin: 32,
    flexGrow: 1
  }
}));

export const AppLayout = (props: Props) => {
  const client = createApolloClient();

  return (
    <ApolloProvider client={client}>
      <AppLayoutStyled>{props.children}</AppLayoutStyled>
    </ApolloProvider>
  );
};

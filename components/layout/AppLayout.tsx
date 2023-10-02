'use client';

import tw, { styled } from 'twin.macro';
import { ReactNode } from 'react';
import { ApolloProvider } from '@apollo/client';
import { createApolloClient } from 'gql/client';

type Props = {
  children: ReactNode;
};

const AppLayoutStyled = styled('div')((props) => [
  tw`flex md:max-h-screen max-md:flex-col`,
  {
    color: props.theme.colors.text.body,

    '& > main': tw`max-md:pt-14 grow md:m-8 m-6 mt-8`
  }
]);

export const AppLayout = (props: Props) => {
  const client = createApolloClient();

  return (
    <ApolloProvider client={client}>
      <AppLayoutStyled>{props.children}</AppLayoutStyled>
    </ApolloProvider>
  );
};

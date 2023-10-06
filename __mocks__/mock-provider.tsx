import { Themes } from 'components/layout/Themes';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  mocks: ReadonlyArray<MockedResponse>;
};

export const MockedApolloProvider = (props: Props) => {
  return (
    <MockedProvider mocks={props.mocks} addTypename={false}>
      <Themes>{props.children}</Themes>
    </MockedProvider>
  );
};

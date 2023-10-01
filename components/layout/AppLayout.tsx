'use client';

/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/react';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const AppLayout = (props: Props) => {
  return (
    <div
      css={{
        display: 'flex'
      }}
    >
      {props.children}
    </div>
  );
};

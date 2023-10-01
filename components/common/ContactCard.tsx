/** @jsx jsx */

import { jsx } from '@emotion/react';
import { Button } from 'components/core/Button';
import { Delete } from 'react-feather';

type Props = {
  id: string;
  name: string;
};

export const ContactCard = (props: Props) => {
  return (
    <div
      css={{
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <p>{props.name}</p>

      <div
        css={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Button variant="danger">
          <Delete />
        </Button>
      </div>
    </div>
  );
};

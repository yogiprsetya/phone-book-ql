/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/react';
import { ReactNode } from 'react';

type Variants = 'headline-1' | 'headline-2' | 'text';

type Props = {
  tag?: 'p' | 'h1' | 'h2' | 'h3';
  variant?: Variants;
  className?: string;
  children: ReactNode;
};

export const Text = (props: Props) => {
  const { tag = 'p', children, variant = 'text', className } = props;
  const Element = tag;

  const sizing: Record<Variants, object> = {
    'headline-1': {
      fontSize: 38,
      lineHeight: '42px',
      fontWeight: 800,
      letterSpacing: -0.5
    },
    'headline-2': {
      fontSize: 24,
      lineHeight: '28px',
      fontWeight: 800,
      letterSpacing: -0.2
    },
    text: {
      fontSize: 16,
      lineHeight: '24px'
    }
  };

  return (
    <Element css={{ ...sizing[variant] }} className={className}>
      {children}
    </Element>
  );
};

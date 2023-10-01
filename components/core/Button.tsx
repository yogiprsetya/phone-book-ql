/** @jsx jsx */

import { jsx, useTheme } from '@emotion/react';
import { HTMLAttributes, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  variant: 'primary' | 'secondary' | 'danger';
};

export const Button = (props: Props & HTMLAttributes<HTMLButtonElement>) => {
  const { children, variant, ...restProps } = props;
  const { colors } = useTheme();

  const BG_COLOR = {
    primary: colors.primary,
    secondary: colors.secondary,
    danger: '#ff3266'
  };

  return (
    <button
      {...restProps}
      css={{
        background: BG_COLOR[variant],
        padding: '4px 12px',
        borderRadius: 6
      }}
    >
      {children}
    </button>
  );
};

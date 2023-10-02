'use client';

import tw, { styled } from 'twin.macro';
import { HTMLAttributes, ReactNode } from 'react';

interface IButton extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'primary' | 'secondary' | 'danger';
}

const ButtonStyled = styled('button')<IButton>(({ theme, variant }) => {
  const BG_COLOR = {
    primary: theme.colors.primary,
    secondary: theme.colors.secondary,
    danger: theme.colors.danger
  };

  return [
    tw`py-1 px-3 font-semibold`,
    {
      background: BG_COLOR[variant],
      color: variant === 'danger' ? theme.colors.secondary : theme.colors.text.body,
      borderRadius: 6
    }
  ];
});

export const Button = (props: IButton) => {
  const { children, variant, ...restProps } = props;

  return (
    <ButtonStyled {...restProps} variant={variant}>
      {children}
    </ButtonStyled>
  );
};

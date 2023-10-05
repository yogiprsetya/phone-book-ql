'use client';

import tw, { styled } from 'twin.macro';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'primary' | 'secondary' | 'danger';
}

const ButtonStyled = styled('button')<IButton>(({ theme, variant, disabled }) => {
  const BG_COLOR = {
    primary: theme.colors.primary,
    secondary: theme.colors.hightlight,
    danger: theme.colors.danger
  };

  return [
    tw`py-1 px-3 font-bold`,
    {
      background: BG_COLOR[variant],
      color: variant === 'danger' ? theme.colors.secondary : theme.colors.text.body,
      borderRadius: 6,
      opacity: disabled ? 0.6 : 1
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

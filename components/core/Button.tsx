'use client';

import tw, { styled } from 'twin.macro';
import { HTMLAttributes, ReactNode } from 'react';

interface IButton extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'primary' | 'secondary' | 'danger';
}

const ButtonStyled = styled('button')<IButton>((props) => {
  const BG_COLOR = {
    primary: props.theme.colors.primary,
    secondary: props.theme.colors.secondary,
    danger: props.theme.colors.danger
  };

  return [
    tw`p-2 p-1`,
    {
      background: BG_COLOR[props.variant],
      padding: '4px 12px',
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

import { InputHTMLAttributes } from 'react';
import tw, { styled } from 'twin.macro';

const InputStyled = styled('input')((props) => [
  tw`flex items-center h-8 w-full px-1`,
  {
    borderBottom: `2px solid ${props.theme.colors.primary}`
  }
]);

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <InputStyled {...props} />;
};

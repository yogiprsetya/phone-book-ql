import { HTMLProps } from 'react';
import tw from 'twin.macro';

type Props = {
  label: string;
};

const FieldsetStyled = tw.fieldset`p-2 border rounded`;

export const Fieldset = (props: Props & HTMLProps<HTMLFieldSetElement>) => {
  const { label, children, ...restProps } = props;

  return (
    <FieldsetStyled {...restProps}>
      <legend className="italic text-xs">{label}</legend>

      {children}
    </FieldsetStyled>
  );
};

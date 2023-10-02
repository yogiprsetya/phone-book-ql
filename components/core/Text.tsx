import { ReactNode } from 'react';
import tw, { styled } from 'twin.macro';

type Variants = 'headline-1' | 'headline-2' | 'text';

type Props = {
  tag?: 'p' | 'h1' | 'h2' | 'h3';
  variant?: Variants;
  className?: string;
  children: ReactNode;
};

const TextStyled = styled('p')<{ variant?: Variants }>((props) => {
  if (props.variant === 'headline-1') {
    return [
      tw`md:text-4xl text-3xl`,
      {
        fontWeight: 800,
        letterSpacing: -0.5
      }
    ];
  }

  if (props.variant === 'headline-2') {
    return [
      tw`md:text-2xl text-lg`,
      {
        fontWeight: 800,
        letterSpacing: -0.2
      }
    ];
  }

  return {
    fontSize: 16,
    lineHeight: '24px'
  };
});

export const Text = (props: Props) => {
  const { tag = 'p', children, variant = 'text', className } = props;

  return (
    <TextStyled as={tag} variant={variant} className={className}>
      {children}
    </TextStyled>
  );
};

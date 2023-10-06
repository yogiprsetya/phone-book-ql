'use client';

import { useOutsideEvent } from 'hooks/useOutsideEvent';
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import tw, { styled } from 'twin.macro';
import { Text } from './Text';

const OverlayStyled = styled('div')([
  tw`bg-black/50`,
  {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh'
  }
]);

const ModalStyled = styled('div')(({ theme }) => [
  tw`mx-auto px-6 py-4 w-fit md:mt-10 mt-6`,
  {
    borderRadius: 4,
    background: theme.colors.secondary,
    minWidth: 480
  }
]);

type Props = {
  title: string;
  children: ReactNode;
  show: boolean;
  onClose?: () => void;
};

export const Modal = (props: Props) => {
  const refOutside = useOutsideEvent(() => props.onClose && props.onClose());

  const Component = (
    <OverlayStyled ref={refOutside}>
      <ModalStyled>
        <header className="mb-4 pb-1 border-b">
          <Text tag="h3" variant="headline-2">
            {props.title}
          </Text>
        </header>

        {props.children}
      </ModalStyled>
    </OverlayStyled>
  );

  return props.show ? createPortal(Component, document.body) : null;
};

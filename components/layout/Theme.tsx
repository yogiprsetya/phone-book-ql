import { ReactNode } from 'react';
import { ThemeProvider } from '@emotion/react';

type Props = {
  children: ReactNode;
};

const theme = {
  primary: '#41b548',
  secondary: '#ffffff',
  hightlight: '#fff40c'
};

export const Theme = (props: Props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

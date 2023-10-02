'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from '@emotion/react';

type Props = {
  children: ReactNode;
};

const theme = {
  colors: {
    primary: '#41b548',
    secondary: '#ffffff',
    hightlight: '#fff40c',
    border: '#f0f3f7',
    danger: '#e02954',
    text: {
      body: '#1e293b',
      dark: '#0f172a'
    }
  }
};

export const Themes = (props: Props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

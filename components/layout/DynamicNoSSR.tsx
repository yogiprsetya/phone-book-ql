'use client';

import { NextPage } from 'next';
import dynamic from 'next/dynamic';

export const DynamicNoSSR = <T,>(App: NextPage<T>) => {
  return dynamic(() => Promise.resolve(App), {
    ssr: true
  });
};

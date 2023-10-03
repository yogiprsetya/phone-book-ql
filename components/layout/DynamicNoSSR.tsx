'use client';

import { NextPage } from 'next';
import dynamic from 'next/dynamic';

export const DynamicNoSSR = (App: NextPage) => {
  return dynamic(() => Promise.resolve(App), {
    ssr: false
  });
};

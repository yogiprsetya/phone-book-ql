import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Main = (props: Props) => {
  return (
    <main className="max-md:pt-16 grow max-h-screen overflow-y-auto">
      <div className="md:m-8 m-6 mt-8">{props.children}</div>
    </main>
  );
};

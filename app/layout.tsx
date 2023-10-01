import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import { Themes } from 'components/layout/Themes';
import { Sidebar } from 'components/layout/Sidebar';
import { AppLayout } from 'components/layout/AppLayout';
import 'reset-css';

const nunito = Nunito_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Phone Book QL',
  description: 'Self thinking project phonebook with GQL'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Themes>
          <AppLayout>
            <Sidebar />
            <main>{children}</main>
          </AppLayout>
        </Themes>
      </body>
    </html>
  );
}

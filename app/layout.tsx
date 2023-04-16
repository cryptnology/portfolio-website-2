import { Montserrat } from 'next/font/google';
import { Footer, NavBar, Providers } from '@/components';

import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-mont' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.className}`}>
      <body className="flex min-h-screen flex-col bg-light dark:bg-dark">
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

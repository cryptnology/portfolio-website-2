import { Montserrat } from 'next/font/google';
import { Footer, NavBar } from '@/components';

import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-mont' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.className} bg-light`}>
      <body className="flex min-h-screen flex-col">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

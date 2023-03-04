import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
      <main className='flex w-full flex-1 flex-col items-center justify-center px-20 text-center'>
        <h1>Porfolio Page</h1>
      </main>
      <footer className='flex h-24 w-full items-center justify-center border-t mt-auto'>
        <h1>Cryptnology.Dev</h1>
      </footer>
    </div>
  );
}

import '@uploadthing/react/styles.css';
import './globals.css';
import type { Metadata } from 'next';
import { Monoton } from 'next/font/google';

const monoton = Monoton({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'tou',
  description: 'A free, simple image hosting service',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='h-screen text-white bg-gradient-to-b from-zinc-900 via-gray-900 to-stone-950'>
        <div
          className={`${monoton.className} select-none text-9xl text-center`}
        >
          <span className='text-gold'>T</span>ou
          <sup className='text-7xl'>4</sup>
        </div>
        {children}
      </body>
    </html>
  );
}

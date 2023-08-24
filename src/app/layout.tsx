import '@uploadthing/react/styles.css';
import './globals.css';
import type { Metadata } from 'next';
import { Monoton } from 'next/font/google';

const monoton = Monoton({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  metadataBase: new URL('https://tou.im'),
  title: 'tou',
  description: 'A free, simple image hosting service',
  openGraph: {
    title: 'tou.im',
    description: 'A free, simple image hosting service',
    url: 'https://tou.im',
    siteName: 'tou.im',
    images: [
      {
        url: '/banner.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
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

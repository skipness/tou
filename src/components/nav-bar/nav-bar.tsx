import Link from 'next/link';

export default () => (
  <nav className='flex h-24 items-center'>
    <Link href='/' replace>
      <div className='title select-none text-6xl'>
        <span className='text-gold'>T</span>ou
        <sup className='text-4xl'>4</sup>
      </div>
    </Link>
  </nav>
);

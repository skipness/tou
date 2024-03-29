import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex flex-col items-start text-lightgrey h-full items-center	'>
      <div className='font-semibold text-10xl tracking-widest	'>404</div>
      <div className='font-medium text-2xl tracking-wider'>
        Opps! The page you requested doesn&#39;t exist
      </div>
      <p className='bg-lightgrey cursor-pointer duration-500 ease-in-out flex font-medium h-8 hover:bg-gray-100 items-center my-4 px-4 rounded select-none text-black transition-colors'>
        <Link replace href='/'>
          Home
        </Link>
      </p>
    </div>
  );
}

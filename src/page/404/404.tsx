import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className='flex flex-col items-start text-lightgrey'>
      <div className='font-black text-10xl tracking-wider'>404</div>
      <div className='font-medium text-2xl tracking-wider'>
        <div className='text-3xl'>Opps!</div>
        The page you requested doesn't exist
      </div>
      <p className='bg-lightgrey cursor-pointer duration-500 ease-in-out flex font-medium h-8 hover:bg-gray-100 items-center my-4 px-4 rounded select-none text-black transition-colors'>
        <Link replace to='/'>
          Home
        </Link>
      </p>
    </div>
  );
};

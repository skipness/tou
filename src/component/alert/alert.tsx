import React from 'react';
import { AlertComponentPropsWithStyle } from 'react-alert';

export default ({
  message,
  options: { type },
  style,
}: AlertComponentPropsWithStyle) => {
  return (
    <div
      className={`bg-secondary border-t-4 ${
        type === 'error' ? 'border-red-700' : 'border-gold'
      } my-2 px-4 py-3 rounded-b text-lightgrey shadow-lg w-40`}
      role='alert'
      style={{ ...style, minHeight: '5vh', maxWidth: '90vw', width: '30rem' }}
    >
      <div className='flex items-center'>
        <div className='py-1'>
          <svg
            className={`fill-current h-6 w-6 ${
              type === 'error' ? 'text-red-700' : 'text-gold'
            } mr-4`}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
          >
            <path d='M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z' />
          </svg>
        </div>
        <div className='text-sm'>{message}</div>
      </div>
    </div>
  );
};

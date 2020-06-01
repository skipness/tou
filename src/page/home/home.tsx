import React from 'react';
import UploadZone from '../../component/upload-zone/upload-zone';
import './home.css';

export default () => {
  return (
    <main className='flex flex-col h-full items-center justify-start'>
      <div className='title select-none mt-16 text-9xl text-center md:text-14xl '>
        <span className='text-gold'>T</span>ou
        <sup className='text-6xl md:text-9xl'>4</sup>
      </div>
      <UploadZone />
    </main>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <nav className='flex h-24 items-center'>
    <Link to='/' replace>
      <div className='title select-none text-6xl'>
        <span className='text-gold'>T</span>ou
        <sup className='text-4xl'>4</sup>
      </div>
    </Link>
  </nav>
);

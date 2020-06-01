import React from 'react';

type ProgressRingProps = {
  progress: number;
};

export default (props: ProgressRingProps) => {
  const { progress } = props;
  return (
    <div className='bg-lightgrey rounded w-full'>
      <div
        className='bg-gold h-1 rounded'
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

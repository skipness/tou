import { faCopy } from '@fortawesome/free-regular-svg-icons/faCopy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { createRef } from 'react';
import util from 'util';
import './code-container.css';

type CodeContainerProps = {
  images: any[];
  title: string;
  type: string;
};

export default ({ title, images, type }: CodeContainerProps) => {
  const textareaRef = createRef<HTMLTextAreaElement>();
  const value = images.map((image) => util.format(type, image.url)).join('\n');
  return (
    <div className='flex flex-col mb-8'>
      <div className='flex h-8 justify-between'>
        <p className='font-medium items-end text-lg'>{title}</p>
        <FontAwesomeIcon
          className='cursor-pointer hover:text-gray-100'
          color='lightgrey'
          icon={faCopy}
          onClick={() => {
            if (textareaRef.current) {
              textareaRef.current.select();
              document.execCommand('copy');
              textareaRef.current.setSelectionRange(0, 0);
              alert('Copied');
            }
          }}
          size='lg'
        />
      </div>
      <textarea
        className='box bg-lightgrey hover-bg-gray-100 focus:outline-none p-1 resize-none rounded select-text text-black'
        ref={textareaRef}
        readOnly
        rows={images.length}
        value={value}
      />
    </div>
  );
};

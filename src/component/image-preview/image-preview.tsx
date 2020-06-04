import React, { useState } from 'react';
import './image-preview.css';

type ImagePreviewProps = {
  images: any[];
};

export default ({ images }: ImagePreviewProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const onThumbnailClick = (index: number) => {
    if (index === selectedIndex) return;
    setSelectedIndex(index);
  };
  return (
    <div className='flex flex-col lg:w-4/12'>
      <div className='rounded selected-image-container'>
        <img
          className='object-contain mx-auto'
          src={images[selectedIndex].url}
        />
      </div>
      <div className='flex justify-around mt-8 row'>
        {images.map((image, key) => (
          <img
            alt={image.url}
            className={`border-2 ${
              key === selectedIndex
                ? 'border-gold opacity-100'
                : 'border-transparent'
            } cursor-pointer duration-200 hover:opacity-100 object-cover opacity-75 rounded thumbnail transition-opacity`}
            key={key}
            onClick={() => onThumbnailClick(key)}
            src={image.url}
          />
        ))}
      </div>
    </div>
  );
};

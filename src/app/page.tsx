'use client';

import ImagePreview from '@/components/image-preview';
import { UploadDropzone } from '@uploadthing/react';
import { useState } from 'react';
import type { TouFileRouter } from './api/uploadthing/core';

export default function Home() {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const reset = () => setImageUrls([]);

  return (
    <main className='flex flex-col items-center justify-start'>
      {imageUrls.length > 0 ? (
        <ImagePreview imageUrls={imageUrls} reset={reset} />
      ) : (
        <UploadDropzone<TouFileRouter>
          className='border-2 border-lightgrey border-dashed ut-label:text-gray-50'
          endpoint='imageUploader'
          onClientUploadComplete={(res) => {
            if (res) {
              setImageUrls(res.map((file) => file.url));
            }
          }}
          onUploadError={(error: Error) => {
            alert(`ERROR! ${error.message}`);
          }}
        />
      )}
    </main>
  );
}

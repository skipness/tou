import { faImage } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import CodeContainer from '../code-container';

interface ImagePreviewProps {
  imageUrls: string[];
  reset: () => void;
}

export default function ImagePreview({ imageUrls, reset }: ImagePreviewProps) {
  return (
    <div className='grid grid-cols-1 grid-flow-row gap-2 w-full justify-items-center	'>
      <div className='grid grid-cols-5-dense grid-flow-col gap-4'>
        {imageUrls.map((url, index) => (
          <Link key={index} href={url} target='_blank'>
            <Image
              alt={url}
              className='h-36	border-transparent border-2 hover:border-gold cursor-pointer duration-200 hover:opacity-100 object-cover opacity-75 rounded transition-opacity'
              src={url}
              height={160}
              width={160}
              style={{
                objectFit: 'contain',
              }}
            />
          </Link>
        ))}
      </div>
      <div className='w-1/2'>
        <CodeContainer
          imageUrls={imageUrls}
          title='Direct Link'
          type='direct'
        />
        <CodeContainer imageUrls={imageUrls} title='BBCode' type='bbcode' />
      </div>
      <Link
        onClick={reset}
        href='/'
        replace
        className='bg-lightgrey cursor-pointer duration-500 ease-in-out flex font-medium h-8 items-center my-4 px-4 rounded select-none self-center text-black transition-colors lg:hidden'
      >
        <FontAwesomeIcon
          style={{ marginRight: '0.5rem' }}
          icon={faImage}
          size='lg'
        />
        Upload another image
      </Link>
    </div>
  );
}

import { faCopy } from '@fortawesome/free-regular-svg-icons/faCopy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createRef } from 'react';
import util from 'util';

export type CodeType = 'direct' | 'bbcode';

interface CodeContainerProps {
  imageUrls: string[];
  title: string;
  type: CodeType;
}

const direct = '%s';
const bbcode = '[img]%s[/img]';

export default function CodeContainer({
  title,
  imageUrls,
  type,
}: CodeContainerProps) {
  const textareaRef = createRef<HTMLTextAreaElement>();
  const value = imageUrls
    .map((url) => util.format(type === 'bbcode' ? bbcode : direct, url))
    .join('\n');

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
              alert(
                `Copied ${imageUrls.length} image${
                  imageUrls.length > 1 ? 's' : ''
                }`,
              );
            }
          }}
          size='lg'
        />
      </div>
      <textarea
        className='selection:bg-gold bg-lightgrey hover-bg-gray-100 focus:outline-none p-1 resize-none rounded select-text text-black'
        ref={textareaRef}
        readOnly
        value={value}
      />
    </div>
  );
}

import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons/faTelegramPlane';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faLink } from '@fortawesome/free-solid-svg-icons/faLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAlert } from 'react-alert';

type ShareButtonGroupProps = {
  url: string;
};

export default ({ url }: ShareButtonGroupProps) => {
  const alert = useAlert();
  return (
    <div className='flex justify-around my-4'>
      <FontAwesomeIcon
        className='cursor-pointer hover:text-white'
        color='lightgrey'
        icon={faLink}
        onClick={() => {
          const textField = document.createElement('textarea');
          textField.innerText = url;
          document.body.appendChild(textField);
          textField.select();
          document.execCommand('copy');
          textField.remove();
          alert.info(<p>Copied</p>);
        }}
        size='lg'
      />
      <FontAwesomeIcon
        className='cursor-pointer hover:text-white'
        color='lightgrey'
        icon={faTwitter}
        onClick={() => {
          window.open(`https://twitter.com/intent/tweet?text=${url}`, '_blank');
        }}
        size='lg'
      />
      <FontAwesomeIcon
        className='cursor-pointer hover:text-white'
        color='lightgrey'
        icon={faFacebookF}
        onClick={() => {
          window.open(
            `https://www.facebook.com/sharer/sharer.php?u=${url}`,
            '_blank'
          );
        }}
        size='lg'
      />
      <FontAwesomeIcon
        className='cursor-pointer hover:text-white'
        color='lightgrey'
        icon={faTelegramPlane}
        onClick={() => {
          window.open(`https://telegram.me/share/url?url=${url}`, '_blank');
        }}
        size='lg'
      />
      <FontAwesomeIcon
        className='cursor-pointer hover:text-white'
        color='lightgrey'
        icon={faWhatsapp}
        onClick={() => {
          window.open(`whatsapp://send?text=${url}`);
        }}
        size='lg'
      />
    </div>
  );
};

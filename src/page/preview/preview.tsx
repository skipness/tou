import { faTelegram } from '@fortawesome/free-brands-svg-icons/faTelegram';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import { faImage } from '@fortawesome/free-regular-svg-icons/faImage';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import { faLink } from '@fortawesome/free-solid-svg-icons/faLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './preview.css';

type LocationState = {
  imageURL: string | undefined;
};

export default () => {
  const history = useHistory();
  const location = useLocation<LocationState>();
  useEffect(() => {
    if (location.state === undefined) {
      history.replace('/');
    }
  }, []);
  return (
    <main className='flex flex-col items-start justify-center py-8 lg:flex-row'>
      {location.state && location.state.imageURL && (
        <>
          <div className='h-12 hidden lg:block lg:w-1/12'>
            <FontAwesomeIcon
              className='cursor-pointer hover:text-gray-100'
              color='lightgrey'
              icon={faArrowLeft}
              onClick={() => {
                history.replace('/');
              }}
              size='lg'
            />
          </div>
          <div className='lg:w-4/12'>
            <img className='object-contain' src={location.state.imageURL} />
          </div>
          <div className='flex flex-col w-full mt-8 lg:ml-16 lg:mt-0 lg:w-4/12'>
            <div className='code-container'>
              <p>Direct Link</p>
              <input readOnly type='text' value={location.state.imageURL} />
            </div>
            <div className='code-container'>
              <p>BBCode</p>
              <input
                readOnly
                type='text'
                value={`[img]${location.state.imageURL}[/img]`}
              />
            </div>
            <div className='code-container'>
              <p>HTML</p>
              <input
                readOnly
                type='text'
                value={`<a href="${location.state.imageURL}" target="_blank"><img src="${location.state.imageURL}" /></a>`}
              />
            </div>
            <p
              className='bg-lightgrey cursor-pointer duration-500 ease-in-out flex font-medium h-8 items-center my-4 px-4 rounded select-none self-center text-black transition-colors lg:hidden'
              onClick={() => {
                history.replace('/');
              }}
            >
              <FontAwesomeIcon
                style={{ marginRight: '0.5rem' }}
                icon={faImage}
                size='lg'
              />
              Upload another image
            </p>
            <div className='flex justify-around mt-4'>
              <FontAwesomeIcon
                className='cursor-pointer hover:text-gray-100'
                color='lightgrey'
                icon={faLink}
                onClick={() => {
                  const textField = document.createElement('textarea');
                  textField.innerText = location.state.imageURL;
                  document.body.appendChild(textField);
                  textField.select();
                  document.execCommand('copy');
                  textField.remove();
                  alert('Copied');
                }}
                size='lg'
              />
              <FontAwesomeIcon
                className='cursor-pointer hover:text-gray-100'
                color='lightgrey'
                icon={faTelegram}
                onClick={() => {
                  window.open(`tg://msg_url?text=${location.state.imageURL}`);
                }}
                size='lg'
              />
              <FontAwesomeIcon
                className='cursor-pointer hover:text-gray-100'
                color='#lightgrey'
                icon={faTwitter}
                onClick={() => {
                  window.open(
                    `https://twitter.com/intent/tweet?text=${location.state.imageURL}`,
                    '_blank'
                  );
                }}
                size='lg'
              />
              <FontAwesomeIcon
                className='cursor-pointer hover:text-gray-100'
                color='#lightgrey'
                icon={faWhatsapp}
                onClick={() => {
                  window.open(
                    `whatsapp://send?text=${location.state.imageURL}`
                  );
                }}
                size='lg'
              />
            </div>
          </div>
        </>
      )}
    </main>
  );
};

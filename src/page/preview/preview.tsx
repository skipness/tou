import { faImage } from '@fortawesome/free-regular-svg-icons/faImage';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import CodeContainer from '../../component/code-container/code-container';
import ImagePreview from '../../component/image-preview/image-preview';
import ShareButtonGroup from '../../component/share-button-group/share-button-group';
import Context from '../../store/context/context';

type LocationState = {
  images: any[] | undefined;
};

const direct = '%s';
const bbcode = '[img]%s[/img]';

export default () => {
  const {
    state: {
      imagePreview: { selectedIndex },
    },
  } = useContext(Context);
  const history = useHistory();
  const location = useLocation<LocationState>();
  useEffect(() => {
    if (location.state === undefined) {
      history.replace('/');
    }
  }, []);
  return (
    <main className='flex flex-col items-start justify-center py-8 lg:flex-row'>
      {location.state && location.state.images && (
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
          <ImagePreview images={location.state.images} />
          <div className='flex flex-col w-full mt-8 lg:ml-16 lg:mt-0 lg:w-4/12'>
            <CodeContainer
              images={location.state.images}
              title='Direct Link'
              type={direct}
            />
            <CodeContainer
              images={location.state.images}
              title='BBCode'
              type={bbcode}
            />
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
            <ShareButtonGroup url={location.state.images[selectedIndex].url} />
          </div>
        </>
      )}
    </main>
  );
};

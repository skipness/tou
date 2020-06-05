import React, { useCallback, useMemo, useState } from 'react';
import { FileRejection, useDropzone } from 'react-dropzone';
import { useHistory } from 'react-router-dom';
import upload from '../../service/upload';
// import ProgressBar from '../progress-bar/progress-bar';
import './upload-zone.css';

const activeStyle = {
  borderColor: '#f6e05e',
};

const rejectStyle = {
  borderColor: 'red',
};

export default () => {
  const history = useHistory();
  const [uploading, setUploading] = useState(false);
  const onDrop = useCallback(
    async (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      if (fileRejections.length > 0) {
        return;
      } else if (acceptedFiles.length > 5) {
        alert('Max file count is 5!');
      } else {
        setUploading(true);
        try {
          const response = await upload(acceptedFiles);
          const result = await response.json();
          setUploading(false);
          history.push({
            pathname: '/preview',
            state: { images: result.images },
          });
        } catch (error) {
          setUploading(false);
          console.log(error);
        }
      }
    },
    []
  );
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    open,
  } = useDropzone({
    accept: [
      'image/bmp',
      'image/gif',
      'image/jpeg',
      'image/png',
      'image/x-icon',
    ],
    maxSize: 5 * 1024 * 1024, // 5 MB
    noClick: true,
    noKeyboard: true,
    onDrop: onDrop,
  });
  const style = useMemo(
    () => ({
      ...(isDragActive ? activeStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive]
  );

  return (
    <div className='flex flex-col items-center pb-4 w-3/4 md:w-1/2 lg:w-1/3'>
      {!uploading && (
        <>
          <div
            {...getRootProps({
              className:
                'dropzone bg-black border-lightgrey border-dashed duration-300 ease-in-out flex flex-col items-center outline-none px-4 py-3 rounded transition-colors w-full md:py-5',
              style: style,
            })}
          >
            <input {...getInputProps()} />
            <p>
              <b>Drop image here</b>
            </p>
          </div>
          <br />
          <p>or</p>
          <br />
          <p
            className='bg-lightgrey cursor-pointer duration-500 ease-in-out flex font-medium h-8 hover:bg-gray-100 items-center px-4 rounded select-none text-black transition-colors'
            onClick={open}
          >
            Choose image here
          </p>
          <small className='mt-4 text-center'>
            Accept bmp, gif, jpg, png and ico
            <br />
            5MB per image | 5 files per upload
          </small>
        </>
      )}
      {uploading && (
        <>
          <p>Uploading ...</p>
          <br />
          {/* <ProgressBar progress={progress} /> */}
        </>
      )}
    </div>
  );
};

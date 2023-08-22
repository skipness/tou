import { useContext } from 'react';
import './image-preview.css';

type ImagePreviewProps = {
  images: any[];
};

export default ({ images }: ImagePreviewProps) => {
  // const {
  //   state: {
  //     imagePreview: { selectedIndex },
  //   },
  //   dispatch,
  // } = useContext(Context);
  // const onThumbnailClick = (index: number) => {
  //   if (index === selectedIndex) return;
  //   dispatch({ type: 'CHANGE_SELECTED_INDEX', payload: index });
  // };
  // return (
  //   <div className='flex flex-col self-stretch lg:w-7/12'>
  //     <div className='rounded selected-image-container'>
  //       <img
  //         className='object-contain mx-auto'
  //         src={images[selectedIndex].url}
  //       />
  //     </div>
  //     <div className='flex justify-around mt-8 row'>
  //       {images.map((image, key) => (
  //         <img
  //           alt={image.url}
  //           className={`border-2 ${
  //             key === selectedIndex
  //               ? 'border-gold opacity-100'
  //               : 'border-transparent'
  //           } cursor-pointer duration-200 hover:opacity-100 object-cover opacity-75 rounded thumbnail transition-opacity`}
  //           key={key}
  //           onClick={() => onThumbnailClick(key)}
  //           src={image.url}
  //         />
  //       ))}
  //     </div>
  //   </div>
  // );
};

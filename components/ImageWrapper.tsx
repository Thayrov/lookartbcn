import { ImageWrapperProps } from '@/lib/types';

const ImageWrapper: React.FC<ImageWrapperProps> = ({ image, showIndex, index }) => {
  return (
    <div className='relative'>
      <img
        className='h-[85vh] max-h-[85vh] '
        src={image.src}
        alt={image.title || ''}
        draggable={false}
      />
    </div>
  );
};

export default ImageWrapper;

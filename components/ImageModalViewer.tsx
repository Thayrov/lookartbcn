import React, { useEffect, useState } from 'react';
import ImageWrapper from './ImageWrapper';
import { ImageType } from '@/lib/types';

interface ImageViewerProps {
  images: ImageType[];
  showIndex?: boolean;
  showPreview?: boolean;
  activeIndex?: number;
  onClose: () => void;
}

export const ImageModalViewer: React.FC<ImageViewerProps> = ({
  images,
  showIndex = true,
  showPreview = true,
  activeIndex: activeIndexProp,
  onClose,
}) => {
  const [activeIndex, setActiveIndex] = useState(activeIndexProp || 0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isPlaying) {
      interval = setInterval(() => {
        goToNext();
      }, 2000); // Cambiar imagen cada 2 segundos
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPlaying, activeIndex, images.length]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const goToPrev = () => {
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleBackgroundClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const itemControl = (index: number) => {
    setActiveIndex(index);
  };
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        goToPrev();
      } else if (event.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    document.body.classList.add('no-scroll');

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('no-scroll');
    };
  }, [activeIndex, images.length]);

  const renderIndicators = () =>
    images.map((_, index) => (
      <div
        key={index}
        className={`${index === activeIndex ? 'bg-blue-500' : 'bg-gray-300'} 
        cursor-pointer h-20 w-20 mx-1  ${showPreview ? 'hover:ring-2 hover:brightness-50 ' : ''}`}
        onClick={() => itemControl(index)}
        style={
          showPreview
            ? { backgroundImage: `url(${images[index].src})`, backgroundSize: 'cover' }
            : {}
        }
      />
    ));
  return (
    <div
      className='fixed inset-0 z-50 overflow-auto bg-black bg-opacity-80 flex justify-center items-center p-4'
      onClick={handleBackgroundClick}>
      <div className='relative bg-transparent border-none w-[92vw] h-[92vh] m-4'>
        <div className='flex flex-col items-center'>
          <ImageWrapper image={images[activeIndex]} showIndex={showIndex} />
          <div className='flex absolute inset-y-14 left-0 right-0 justify-between items-center px-4'>
            <button className='bg-transparent text-white text-6xl p-2' onClick={goToPrev}>
              &lt;
            </button>
            <button className='bg-transparent text-white text-6xl p-2' onClick={goToNext}>
              &gt;
            </button>
          </div>
          <div className='flex mt-4'>{renderIndicators()}</div>
        </div>
        {showIndex && (
          <div className='absolute top-0 left-0 mt-6 mr-6 text-white text-2xl'>
            {`${activeIndex + 1}/${images.length}`}
          </div>
        )}
        <div className='flex row gap-6 absolute top-0 right-0'>
          <button onClick={togglePlay} className='text-white text-3xl mt-3'>
            {isPlaying ? '‖' : '▶'}
          </button>
          <button className=' text-white text-6xl' onClick={onClose}>
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

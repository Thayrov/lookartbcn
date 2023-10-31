'use client';
import { CustomCarouselProps } from '@/lib/types';
import { Carousel } from '../lib/material-tailwind-components';
import { FC } from 'react';

export const CustomCarousel: FC<CustomCarouselProps> = ({ children }) => {
  return (
    <Carousel
      className='rounded-xl w-full lg:w-4/5 xl:w-2/3 h-auto'
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className='absolute bottom-4 left-1/2 z-1 flex -translate-x-1/2 gap-2'>
          {new Array(length).fill('').map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? 'w-8 bg-white' : 'w-4 bg-white/50'
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}>
      {children.map((c, index) => (
        <div
          key={index}
          className='w-auto h-[40rem] lg:h-[30rem] flex flex-col gap-4 justify-center align-middle font-mulish p-16 md:p-24'>
          <p>
            <span className='font-bold text-xl'>"</span>
            {c.comment}
            <span className='font-bold text-xl'>"</span>
          </p>
          <a
            href={c.link}
            target='_blank'
            rel='noopener noreferrer'
            className='underline hover:text-gray-400'>
            Continuar leyendo
          </a>
          <h3 className='font-bold self-end pe-8'>{c.name}</h3>
        </div>
      ))}
    </Carousel>
  );
};

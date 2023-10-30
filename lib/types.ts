import { ReactNode } from 'react';

export type DataInfo = {
  icon: string;
  content: JSX.Element | string;
};

export type CustomCarouselProps = {
  children: CarouselItem[];
};

export type CarouselItem = {
  comment: string;
  name: string;
  link: string;
};

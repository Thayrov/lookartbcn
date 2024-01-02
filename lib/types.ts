export type CustomCarouselProps = {
  children: CarouselItem[];
};

export type CarouselItem = {
  comment: string;
  name: string;
  link: string;
};

export type ImageType = {
  src: string;
  content: string;
  title?: string;
};

export type ImageWrapperProps = {
  image: ImageType;
  showIndex: boolean;
  index?: string;
};

export type SectionTitle =
  | 'Belleza manos'
  | 'Belleza pies'
  | 'Diseño de mirada'
  | 'Masajes corporales'
  | 'Gua Sha Facial'
  | 'Joyería dental';

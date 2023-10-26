import Link from 'next/link';
import { Button } from '../lib/importComponents';

export const CustomButton = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link href={href} className='items-center relative animated-button text-center'>
      <Button
        className='rounded-none font-inter font-normal text-md capitalize text-white'
        variant='gradient'>
        {text}
      </Button>
      <span className='top'></span>
      <span className='right'></span>
      <span className='bottom'></span>
      <span className='left'></span>
    </Link>
  );
};

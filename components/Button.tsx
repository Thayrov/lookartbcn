import Link from 'next/link';
import { Button } from '../lib/material-tailwind-components';

export const CustomButton = ({
  text,
  href,
  className,
  children,
}: {
  text: string;
  href: string;
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <Link href={href} className={`items-center relative text-center`}>
      <Button
        className={`${className} rounded-sm font-mulish text-md text-white bg-secondary font-bold tracking-wide`}
        variant='filled'>
        <span className='flex items-center gap-2'>
          {text} {children}
        </span>
      </Button>
      <span className='top'></span>
      <span className='right'></span>
      <span className='bottom'></span>
      <span className='left'></span>
    </Link>
  );
};

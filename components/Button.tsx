import Link from 'next/link';
import { Button } from '../lib/importComponents';

export const CustomButton = ({
  text,
  href,
  className,
}: {
  text: string;
  href: string;
  className?: string;
}) => {
  return (
    <Link href={href} className={`items-center relative text-center`}>
      <Button
        className={`${className} rounded-sm font-mulish text-md text-white bg-secondary font-bold tracking-wide`}
        variant='filled'>
        {text}
      </Button>
      <span className='top'></span>
      <span className='right'></span>
      <span className='bottom'></span>
      <span className='left'></span>
    </Link>
  );
};

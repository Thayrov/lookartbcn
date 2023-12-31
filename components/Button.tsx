'use client';
import { useRouter } from 'next/navigation';
import { Button } from '../lib/material-tailwind-components';

export const CustomButton = ({
  text,
  href,
  className,
  target,
  children,
}: {
  text: string;
  href: string;
  className?: string;
  target?: string;
  children?: React.ReactNode;
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (target === '_blank') {
      window.open(href, target);
    } else {
      router.push(href);
    }
  };

  return (
    <Button
      onClick={handleClick}
      className={`rounded-md font-mulish text-md text-white bg-secondary font-bold tracking-wide hover:text-primary ${className}`}
      variant='filled'>
      <span className='flex items-center gap-2 uppercase'>
        {text} {children}
      </span>
    </Button>
  );
};

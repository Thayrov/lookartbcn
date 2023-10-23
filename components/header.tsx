'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Navbar, IconButton, Collapse, Button } from '../lib/importComponents';
import { links } from '@/lib/data';

export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  const navList = (
    <ul className='mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      {links.map((link) => (
        <Link
          key={link.hash}
          href={`/${link.path}`}
          className={`flex items-center relative text-white 
          ${!openNav ? 'animated-button' : ''} 
          ${!openNav && pathname === `/${link.path}` ? 'border-2 border-secondary' : ''}`}>
          <Button
            className={`rounded-none font-inter font-normal text-md text-white capitalize ${
              openNav ? 'text-left' : ''
            }`}
            fullWidth={openNav}
            variant='text'>
            {link.name}
          </Button>
          <span className='top'></span>
          <span className='right'></span>
          <span className='bottom'></span>
          <span className='left'></span>
        </Link>
      ))}
    </ul>
  );

  return (
    <header className='sticky top-0 z-10 max-h-[768px] w-full overflow-hidden '>
      <Navbar className='h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-primary border-none'>
        <div className='flex items-center justify-between'>
          <Link href='/'>
            <Image src='/logo.png' width={100} height={100} alt='Look Art Logo' />
          </Link>
          <div className='flex items-center gap-4'>
            <div className='mr-4 hidden lg:block'>{navList}</div>
            <IconButton
              variant='text'
              className='ml-auto h-10 w-10 text-inherit rounded-none bg-secondary hover:bg-secondary focus:bg-secondary active:bg-secondary lg:hidden'
              ripple={false}
              onClick={() => setOpenNav(!openNav)}>
              {openNav ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  className='h-6 w-6'
                  viewBox='0 0 24 24'
                  stroke='#FFF'
                  strokeWidth={2}>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  stroke='#FFF'
                  strokeWidth={2}>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>{navList}</Collapse>
      </Navbar>
    </header>
  );
}

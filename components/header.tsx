'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Navbar, IconButton, Collapse, Button } from '../lib/material-tailwind-components';
import { links } from '@/lib/data';
import { SectionTitle } from '@/lib/types';
import BookButton from './BookButton';

const navListMenuItems: { title: SectionTitle }[] = [
  { title: 'Belleza manos' },
  { title: 'Belleza pies' },
  { title: 'Diseño de mirada' },
  { title: 'Masajes corporales' },
  { title: 'Gua Sha Facial' },
  { title: 'Joyería dental' },
];

const sectionMap = {
  'Belleza manos': '#belleza-manos',
  'Belleza pies': '#belleza-pies',
  'Diseño de mirada': '#mirada',
  'Masajes corporales': '#masajes',
  'Gua Sha Facial': '#gua-sha',
  'Joyería dental': '#dental',
};

export default function Header() {
  const [openNav, setOpenNav] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const [ripple, setRipple] = useState(false);

  const handleRipple = () => {
    setRipple(true);
    setTimeout(() => setRipple(false), 600);
  };

  useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  const navList = (
    <ul className='mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center'>
      {links.map((link) => {
        const handleClick = () => {
          router.push(`/${link.path}`);
        };

        return (
          <li
            key={link.hash}
            className={`flex items-center relative text-white 
            ${!openNav ? 'animated-button' : ''} 
            ${!openNav && pathname === `/${link.path}` ? 'border-2 border-secondary' : ''}`}
            onClick={handleClick}>
            <Button
              className={`rounded-none font-raleway font-medium text-base text-white capitalize ${
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
          </li>
        );
      })}
    </ul>
  );

  return (
    <header className='sticky top-0 z-10 max-h-[768px] w-full overflow-hidden '>
      <Navbar className='h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 border-none bg-opacity-40'>
        <div className='flex items-center justify-between'>
          <Link
            href='/'
            className={`rounded-none bg-transparent ${
              ripple ? 'ripple-active' : ''
            } ripple-effect hover:bg-black/10`}
            onClick={handleRipple}>
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
            <BookButton />
          </div>
        </div>
        <Collapse open={openNav}>{navList}</Collapse>
      </Navbar>
    </header>
  );
}

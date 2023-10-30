'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { BiChevronDown } from '../lib/react-icons-imports';
import {
  Navbar,
  IconButton,
  Collapse,
  Button,
  MenuItem,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
} from '../lib/material-tailwind-components';
import { links } from '@/lib/data';

const navListMenuItems = [
  { title: 'Belleza manos' },
  { title: 'Belleza pies' },
  { title: 'Diseño de mirada' },
  { title: 'Masajes corporales' },
  { title: 'Gua Sha Facial' },
  { title: 'Joyería dental' },
];

function NavListMenu({ page }: { page: string }): React.ReactElement {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleOpen = () => setIsMenuOpen((cur) => !cur);

  const renderItems = navListMenuItems.map(({ title }) => (
    <Link href='#' key={title}>
      <MenuItem className='text-white rounded-none hover:bg-white hover:text-secondary active:bg-white active:text-secondary focus:bg-white focus:text-secondary'>
        <Typography className='px-0 font-raleway font-medium'>{title}</Typography>
      </MenuItem>
    </Link>
  ));

  return (
    <>
      <Menu allowHover open={isMenuOpen} handler={toggleOpen}>
        <MenuHandler>
          <Link href='/Tratamientos'>
            <MenuItem className='hidden items-center gap-2 bg-transparent lg:flex hover:bg-transparent hover:text-white active:bg-transparent active:text-white focus:bg-transparent focus:text-white p-0 font-raleway'>
              {page}{' '}
              <BiChevronDown
                strokeWidth={2}
                className={`transition-transform ${isMenuOpen ? 'rotate-180' : ''}`}
              />
            </MenuItem>
          </Link>
        </MenuHandler>
        <MenuList className='hidden w-auto grid-cols-7 gap-3 overflow-visible lg:grid bg-primary border-none mt-2'>
          <ul className='col-span-8 flex w-auto flex-col gap-1 bg-primary'>{renderItems}</ul>
        </MenuList>
      </Menu>
      <MenuItem
        className='text-white hover:text-white active:text-white focus:text-white flex items-center gap-2 lg:hidden px-0 font-raleway bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent'
        onClick={toggleOpen}>
        {page}{' '}
        <BiChevronDown
          strokeWidth={2}
          className={`transition-transform ${isMenuOpen ? 'rotate-180' : ''}`}
        />
      </MenuItem>
      <Collapse open={isMenuOpen}>
        <ul className='ml-6 flex w-auto flex-col gap-1 lg:hidden'>{renderItems}</ul>
      </Collapse>
    </>
  );
}

export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  const navList = (
    <ul className='mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center'>
      {links.map((link) => {
        return (
          <Link
            key={link.hash}
            href={`/${link.path}`}
            className={`flex items-center relative text-white 
          ${!openNav ? 'animated-button' : ''} 
          ${!openNav && pathname === `/${link.path}` ? 'border-2 border-secondary' : ''}`}>
            <Button
              className={`rounded-none font-raleway font-medium text-base text-white capitalize ${
                openNav ? 'text-left' : ''
              }`}
              fullWidth={openNav}
              variant='text'>
              {link.name === 'Tratamientos' ? <NavListMenu page={'Tratamientos'} /> : link.name}
            </Button>
            <span className='top'></span>
            <span className='right'></span>
            <span className='bottom'></span>
            <span className='left'></span>
          </Link>
        );
      })}
    </ul>
  );

  return (
    <header className='sticky top-0 z-10 max-h-[768px] w-full overflow-hidden '>
      <Navbar className='h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 border-none bg-opacity-40'>
        <div className='flex items-center justify-between'>
          <Link href='/'>
            <Button className='rounded-none bg-transparent' variant='text'>
              <Image src='/logo.png' width={100} height={100} alt='Look Art Logo' />
            </Button>
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

'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Navbar, IconButton, Collapse, Button } from '../lib/material-tailwind-components';
import { links } from '@/lib/data';
import BookButton from '../components/BookButton';
import { BiLogoInstagram, BiLogoWhatsapp } from '../lib/react-icons-imports';
import './globals.css';
import { raleway, mulish, stencil } from '@/lib/fonts';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'LookArtBCN',
  description:
    'Centro de salud, belleza y fotografía, creado por Camila y Malena, jóvenes artistas y productoras de Buenos Aires, Argentina.',
};

function Footer() {
  return (
    <footer className='bg-primary text-white pt-4 font-mulish border-t-white border-t-[1px]'>
      <div className='max-w-6xl mx-auto ps-8 py-8 md:px-[10rem] lg:px-4 flex flex-col lg:flex-row justify-between sm:flex-initial lg:items-start gap-6'>
        <div className='mb-4 md:mb-0'>
          <Link href='/'>
            <Image src='/logo.png' width={150} height={150} alt='Look Art Logo' />
          </Link>
        </div>

        <div className='mb-4 md:mb-0 lg:mt-7'>
          <h3 className='text-lg mb-2 font-semibold'>Dirección</h3>
          <p className='text-sm'>Lookart BCN S.L</p>
          <p className='text-sm'>C/ de Ramon Turró, 69 Esquina,</p>
          <p className='text-sm'>08005 Barcelona, España</p>
        </div>

        <div className='mb-4 md:mb-0 lg:mt-7'>
          <h3 className='text-lg mb-2 font-semibold'>Contacto</h3>
          <p className='text-sm'>
            Teléfono:{' '}
            <a href='tel:645044485' className='cursor-pointer underline hover:text-gray-400'>
              645 044 485
            </a>{' '}
            |{' '}
            <a href='tel:931059346' className='cursor-pointer underline hover:text-gray-400'>
              931 059 346
            </a>
          </p>
          <p className='text-sm'>
            Correo electrónico:{' '}
            <a
              href='mailto:lookartbcn@gmail.com'
              className='cursor-pointer underline hover:text-gray-400'>
              lookartbcn@gmail.com
            </a>
          </p>
          <div className='flex items-center mb-4 md:mb-0 space-x-4'>
            <a
              className='bg-white rounded-full mt-2 p-[3px]'
              href='https://www.instagram.com/lookartbcn/'
              target='_blank'
              rel='noreferrer'>
              <BiLogoInstagram className='text-primary text-2xl cursor-pointer' />
            </a>
            <a
              className='bg-white rounded-full mt-2 p-[3px]'
              href='https://wa.me/34645044485'
              target='_blank'
              rel='noreferrer'>
              <BiLogoWhatsapp className='text-primary text-2xl cursor-pointer' />
            </a>
          </div>
        </div>
        <div className='space-x-0 lg:mt-7'>
          <h3 className='text-lg mb-2 font-semibold'>Más enlaces</h3>
          <a href='/legal' className='block cursor-pointer underline hover:text-gray-400 text-sm'>
            Aviso Legal
          </a>
          <a
            href='/privacidad'
            className='block cursor-pointer underline hover:text-gray-400 text-sm'>
            Política de privacidad
          </a>
        </div>
        <div className='space-x-0 lg:mt-7'>
          <BookButton />
        </div>
      </div>

      <div className='flex justify-center bg-white text-primary mt-8 text-center items-center text-sm h-12'>
        © 2023 Lookart BCN S.L
      </div>
    </footer>
  );
}

function Header() {
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='es'
      className={`!scroll-smooth ${raleway.variable} ${mulish.variable} ${stencil.variable} antialiased`}>
      <body className={`${raleway.className} bg-black text-white relative`}>
        <Header />
        {children}
        <Footer />
        <Toaster position='bottom-right' />
      </body>
    </html>
  );
}

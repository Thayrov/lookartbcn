import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiLogoInstagram, BiLogoWhatsapp } from '../lib/react-icons-imports';
import BookButton from './BookButton';

export default function Footer() {
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

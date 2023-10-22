import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiLogoInstagramAlt, BiLogoWhatsappSquare } from 'react-icons/bi';

export default function Footer() {
  return (
    <footer className='bg-primary text-white pt-4 font-mulish'>
      <div className='container mx-auto py-8 px-[10rem] flex flex-col md:flex-row justify-between items-center'>
        <div className='mb-4 md:mb-0'>
          <Link href='/'>
            <Image src='/logo.jpg' width={150} height={150} alt='Look Art Logo' />
          </Link>
        </div>

        <div className='mb-4 md:mb-0'>
          <h3 className='text-lg mb-2 font-semibold'>Dirección</h3>
          <p className='text-sm'>Lookart BCN S.L</p>
          <p className='text-sm'>C/ de Ramon Turró, 69 Esquina,</p>
          <p className='text-sm'>08005 Barcelona, España</p>
        </div>

        <div className='mb-4 md:mb-0'>
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
            <BiLogoInstagramAlt className='text-2xl cursor-pointer' />
            <BiLogoWhatsappSquare className='text-2xl cursor-pointer' />
          </div>
        </div>

        <div className='space-x-4'>
          <h3 className='text-lg mb-2 font-semibold'>Más enlances</h3>
          <a href='/Legal' className='block cursor-pointer underline hover:text-gray-400 text-sm'>
            Aviso Legal
          </a>
          <a
            href='/Privacidad'
            className='block cursor-pointer underline hover:text-gray-400 text-sm'>
            Política de privacidad
          </a>
        </div>
      </div>

      <div className='flex justify-center bg-white text-primary mt-8 text-center items-center text-sm h-12'>
        © 2023 Lookart BCN S.L
      </div>
    </footer>
  );
}

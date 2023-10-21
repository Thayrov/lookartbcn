import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { PiInstagramLogoFill, PiWhatsappLogoFill } from 'react-icons/pi';

export default function Footer() {
  return (
    <footer className='bg-primary text-white pt-4'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
        <div className='mb-4 md:mb-0'>
          <Link href='/'>
            <Image src='/logo.jpg' width={100} height={100} alt='Look Art Logo' />
          </Link>
        </div>

        <div className='mb-4 md:mb-0'>
          <h3 className='text-lg mb-2'>Dirección</h3>
          <p>Lookart BCN S.L</p>
          <p>C/ de Ramon Turró, 69 Esquina,</p>
          <p>08005 Barcelona, España</p>
        </div>

        <div className='mb-4 md:mb-0'>
          <h3 className='text-lg mb-2'>Contacto</h3>
          <p>Teléfono: 645 044 485 | 931 059 346</p>
          <p>Correo electrónico: lookartbcn@gmail.com</p>
          <div className='flex items-center mb-4 md:mb-0 space-x-4'>
            <PiInstagramLogoFill className='text-2xl cursor-pointer' />
            <PiWhatsappLogoFill className='text-2xl cursor-pointer' />
          </div>
        </div>

        <div className='space-x-4'>
          <h3 className='text-lg mb-2'>Más enlances</h3>
          <a href='#' className='hover:underline'>
            Aviso Legal
          </a>
          <a href='#' className='hover:underline'>
            Política de privacidad
          </a>
        </div>
      </div>

      <div className='bg-white text-primary mt-8 text-center'>© 2023 Lookart BCN S.L</div>
    </footer>
  );
}

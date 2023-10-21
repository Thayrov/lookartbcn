import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className='z-[999] relative'>
      <nav className='flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
        <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
          <Link href={'/'}>Home</Link>
          <Link href={'/LookArt'}>Look Art</Link>
          <Link href={'/Plato'}>Plató Fotográfico</Link>
          <Link href={'/Tratamientos'}>Tratamientos</Link>
          <Link href={'/Reservaciones'}>Reserva una cita</Link>
        </ul>
      </nav>
    </header>
  );
}

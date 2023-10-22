'use client';
import { links } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import '../app/globals.css';
import { useState } from 'react';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className='z-[999] relative bg-primary p-4 '>
      <nav className='flex justify-between items-center'>
        <Link href='/'>
          <Image src='/logo.jpg' width={100} height={100} alt='Look Art Logo' />
        </Link>
        <ul
          className={`absolute left-0 top-24 mt-4 bg-primary w-full flex flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium sm:w-[initial] sm:flex-nowrap sm:gap-5 ${
            isMenuOpen ? 'flex-col lg:flex-row' : 'hidden'
          } lg:static sm:bg-transparent`}>
          {links.map((link) => (
            <Link
              key={link.hash}
              href={`/${link.path}`}
              className={`relative text-white px-4 py-2 animated-button ${
                pathname === `/${link.path}` ? 'border-2 border-secondary' : ''
              }`}>
              <span className='top'></span>
              <span className='right'></span>
              <span className='bottom'></span>
              <span className='left'></span>
              {link.name}
            </Link>
          ))}
        </ul>

        <button
          className='sm:block w-[44px] h-[44px] bg-secondary md:block lg:hidden relative z-10'
          onClick={() => setMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <RxCross1 className='absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-2xl cursor-pointer text-white' />
          ) : (
            <RxHamburgerMenu className='absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-2xl cursor-pointer text-white' />
          )}
        </button>
      </nav>
    </header>
  );
}

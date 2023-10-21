'use client';
import { links } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import '../app/globals.css';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className='z-[999] relative bg-primary p-4 '>
      <nav className='flex justify-between items-center'>
        <Link href='/'>
          <Image src='/logo.jpg' width={100} height={100} alt='Look Art Logo' />
        </Link>

        <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
          {links.map((link) => (
            <Link
              key={link.hash}
              href={`/${link.path}`}
              className={`relative text-white px-4 py-2 animated-button ${
                pathname === `/${link.path}` ? 'border-2 border-pink-500' : ''
              }`}>
              <span className='top'></span>
              <span className='right'></span>
              <span className='bottom'></span>
              <span className='left'></span>
              {link.name}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
}

import { CustomButton } from '@/components/Button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex flex-col items-center'>
      <section className='relative w-full h-[70vh] bg-cover bg-center'>
        <Image
          className='z-[-1] object-cover bg-center'
          src='/hero.jpeg'
          alt='Mujeres conversando'
          style={{ backgroundImage: 'url(/hero.jpeg)' }}
          fill={true}
        />
        <Link
          href={'Tratamientos'}
          className='absolute right-1/4 bottom-1/2 text-white font-bold text-3xl'>
          Ver tratamientos
        </Link>
        <div className='absolute bottom-0 w-full h-auto bg-primary text-white text-xl flex flex-col items-center justify-center'>
          <p>El Arte de la Belleza</p>
          <h1>Centro de Belleza, Salud y Fotografía</h1>
          <CustomButton text={'Reservaciones'} href={'/Reservaciones'} />
        </div>
      </section>
    </main>
  );
}

import { CustomButton } from '@/components/Button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex flex-col items-center'>
      <section className='relative w-full h-[70vh] bg-cover bg-center'>
        <Image
          className='z-[-1] object-cover bg-center brightness-50'
          src='/hero.jpeg'
          alt='Mujeres conversando'
          style={{ backgroundImage: 'url(/hero.jpeg)' }}
          fill={true}
        />

        <div className='p-0 m-0 absolute right-1/4 bottom-1/4 h-auto text-white font-bold text-3xl'>
          <CustomButton
            text={'Ver tratamientos'}
            href={'/Tratamientos'}
            className='underline capitalize'
          />
        </div>
      </section>
      <section className='w-full h-auto bg-primary text-white text-xl flex flex-col items-center justify-center border-t-[1px] border-b-[1px] gap-8 font-semibold py-16 font-mulish tracking-wide'>
        <p className='text-5xl'>El Arte de la Belleza</p>
        <h1 className='text-4xl'>Centro de Belleza, Salud y Fotografía</h1>
        <CustomButton
          text={'Pedir cita'}
          href={'/Reservaciones'}
          className='text-xl bg-secondary'
        />
      </section>
    </main>
  );
}

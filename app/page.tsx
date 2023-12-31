import { CustomAccordion } from '@/components/Accordion';
import { CustomButton } from '@/components/Button';
import { InfoCard } from '@/components/InfoCard';
import { accordionData, treatments } from '@/lib/data';
import Image from 'next/image';
import BookButton from '@/components/BookButton';

export default function Home() {
  const tratamientos = treatments.map(
    (treatment: { name: string; image: string; path: string }) => (
      <div key={treatment.name} className='relative '>
        <Image
          src={treatment.image}
          alt={treatment.name}
          width={200}
          height={200}
          style={{ backgroundImage: `url(${treatment.image})` }}
          className='object-cover bg-center brightness-50 w-full h-96'
        />
        <CustomButton
          text={treatment.name}
          href={`/tratamientos${treatment.path}`}
          className='absolute z-[1] left-[1rem] bottom-[10rem] whitespace-nowrap'
        />
      </div>
    )
  );

  return (
    <main className='flex flex-col items-center'>
      <section className='relative block w-full h-[70vh] bg-cover bg-center'>
        <Image
          className='z-[-1] object-cover bg-center brightness-95'
          src='/hero.jpeg'
          alt='Mujeres conversando'
          style={{ backgroundImage: 'url(/hero.jpeg)' }}
          fill={true}
        />
        <div className='p-0 m-0 absolute right-1/4 bottom-1/4 h-auto text-white font-bold text-3xl'>
          <CustomButton text={'Ver tratamientos'} href={'/Tratamientos'} className='capitalize' />
        </div>
      </section>
      <section className='text-center w-full h-auto bg-primary text-white text-xl flex flex-col items-center justify-center border-t-[1px] border-b-[1px] gap-8 font-semibold py-16 font-mulish tracking-wide'>
        <p className='text-5xl'>El Arte de la Belleza</p>
        <h1 className='text-4xl '>Centro de Belleza, Salud y Fotografía</h1>
        <BookButton />
      </section>
      <section className='bg-black w-full grid lg:grid-cols-3 md:grid-cols-1 gap-12 p-12 py-24 border-none'>
        {tratamientos}
      </section>
      <section className='bg-black w-full pt-28 p-12 lg:p-24 border-none'>
        <CustomAccordion data={accordionData} />
      </section>
      <section className='bg-black w-full py-28 px-12 lg:px-24 xl:px-48 2xl:px-60 border-none flex flex-col lg:flex-row gap-10 justify-between align-middle'>
        <article className='text-white text-base font-mulish font-medium self-center'>
          <h2 className='text-secondary text-2xl font-bold pb-4'>Diseños únicos</h2>
          <p className='pb-4'>
            En LookArt BCN encontrarás manicuras y pedicuras con diseños únicos.
          </p>
          <h2 className='text-secondary text-2xl font-bold pb-4'>Te sentirás como en casa</h2>
          <p className='pb-4'>
            También ofrecemos joyería dental, masajes, y bienestar general, de manera única, en un
            ambiente diverso y diferente dónde te sentirás como en casa.
          </p>
          <h2 className='text-secondary text-2xl font-bold pb-4'>Alquiler de locales artísticos</h2>
          <p className='pb-4'>
            Y si eres un artista y necesitas un local adecuado para tus proyectos puedes contar con
            LookArt Bcn, alquilamos espacios adecuados para proyectos artísticos y colaboraciones.
          </p>
        </article>
        <Image
          src='/support-1.jpeg'
          alt='Mujer con lentes modernos'
          width={400}
          height={400}
          className='w-full lg:w-1/2'
        />
      </section>
      <section
        className='w-full sm:h-[90rem] lg:h-[30rem] bg-fixed brightness-90 bg-cover bg-center flex flex-col lg:flex-row py-14 justify-center items-center gap-10 px-0 lg:px-24 xl:px-48'
        style={{ backgroundImage: 'url(/support-2.jpeg)' }}>
        <InfoCard />
      </section>
    </main>
  );
}

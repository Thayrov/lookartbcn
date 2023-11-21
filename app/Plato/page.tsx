import { CustomButton } from '@/components/Button';
import Image from 'next/image';
import { BiLinkExternal, BiLogoInstagram } from '../../lib/react-icons-imports';
import { platoImages1, platoImages2 } from '@/lib/data';
import { Form } from '@/components/Form';

export default function Plato() {
  return (
    <main className='flex flex-col items-center'>
      <section className='flex w-full h-[45rem] overflow-hidden'>
        <video
          src='/hero-3.mov'
          autoPlay
          loop
          muted
          className='min-w-full'
          style={{
            objectFit: 'cover',
            objectPosition: 'center +40%',
          }}></video>
      </section>
      <section className='text-center text-4xl lg:text-5xl w-full h-auto bg-primary text-white flex flex-col items-center justify-center border-t-[1px] border-b-[1px] gap-8 font-semibold py-16 font-mulish tracking-wide'>
        <h1>Plató Fotográfico</h1>
      </section>
      <section className='relative flex w-full h-auto lg:h-[45rem] justify-end items-center p-6 lg:p-16'>
        <Image
          className='z-[-1] object-cover object-top brightness-75'
          src='/support-2.jpeg'
          alt='Pies femeninos'
          style={{ backgroundImage: 'url(/support-2.jpeg)', transform: 'scaleX(-1)' }}
          fill={true}
        />
        <div className='w-full lg:w-[40rem] h-auto bg-black self-center flex flex-col p-10 py-20 m-0 items-start gap-8 text-white'>
          <p className='font-mulish text-xl'>
            Dentro de Lookart BCN, se encuentra nuestro plató fotográfico, un espacio en constante
            evolución. Aquí, rompemos con lo convencional para crear un espacio único que va más
            allá de lo tradicional/convencional.
            <br />
            <br />
            Nos encontramos en continuo proceso de mejora y transformación, incorporando
            intervenciones artísticas que buscan inspirar y potenciar la creatividad en cada
            producción.
            <br />
            <br />
            Nuestro objetivo es ofrecer un ambiente donde tus ideas puedan florecer y tus proyectos
            cobren vida de una manera completamente nueva. ¡El límite está en tu imaginación!
            <br />
            <br />
            ¡Contáctanos para cualquier duda o pregunta!
          </p>
          <div className='w-full flex flex-col md:flex-row gap-6 items-center'>
            <CustomButton
              text={'Más información'}
              href={'https://www.instagram.com/lookartbcnstudio'}
              target={'_blank'}
              className='text-xl bg-secondary'>
              <BiLogoInstagram className='text-2xl' />
            </CustomButton>
            <CustomButton
              text={'Reserva una cita'}
              href={'https://lookartbcn.booksy.com'}
              target={'_blank'}
              className='text-xl bg-secondary'>
              <BiLinkExternal />
            </CustomButton>
          </div>
        </div>
      </section>
      <section className='bg-white w-full h-auto py-4 gap-4 grid grid-cols-2 lg:grid-cols-4 '>
        {platoImages1.map((img) => (
          <article
            key={img.image}
            className='relative w-full aspect-square overflow-hidden cursor-zoom-in'>
            <Image
              src={img.image}
              alt={img.description}
              fill={true}
              className='transition-all duration-500 object-cover object-center hover:brightness-75 hover:scale-110'
            />
          </article>
        ))}
      </section>
      <section className='text-center text-4xl lg:text-5xl w-full h-auto bg-black text-white flex flex-col items-center justify-center border-t-[1px] border-b-[1px] gap-8 font-semibold py-16 font-mulish tracking-wide'>
        <h2>Conoce nuestro estudio</h2>
        <CustomButton
          text={'Síguenos en Instagram'}
          href={'https://www.instagram.com/lookartbcnstudio'}
          target={'_blank'}
          className='text-sm bg-secondary rounded-full normal-case'>
          <BiLogoInstagram />
        </CustomButton>
      </section>
      <section className='bg-white w-full h-auto py-4 gap-4 grid grid-cols-3'>
        {platoImages2.map((img) => (
          <article
            key={img.image}
            className='relative w-full aspect-square overflow-hidden cursor-zoom-in'>
            <Image
              src={img.image}
              alt={img.description}
              fill={true}
              className='transition-all duration-500 object-cover object-center hover:brightness-75 hover:scale-110'
            />
          </article>
        ))}
      </section>
      <section className='flex w-full h-[45rem] overflow-hidden relative'>
        <div className='absolute ps-72 pt-20 w-1/2 flex flex-col align-center'>
          <p className='text-lg'>
            Los campos marcados con <span className='text-red-500'>*</span> son obligatorios
          </p>
          <Form />
        </div>
        <video
          src='/plato-12.mov'
          autoPlay
          loop
          muted
          className='min-w-full'
          style={{
            objectFit: 'cover',
            objectPosition: 'center +30%',
          }}></video>
      </section>
    </main>
  );
}

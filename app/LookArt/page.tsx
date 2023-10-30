'use client';
import { CustomButton } from '@/components/Button';
import Image from 'next/image';
import { BiLinkExternal } from '../../lib/react-icons-imports';
import { CustomCarousel } from '@/components/Carousel';

export default function LookArt() {
  const comments = [
    {
      comment: `Excelente atención, calidez humana y un local estéticamente reconfortable.
    Están para los clientes, te identifican y reconocen, responden los mensajes rápidos y son súper amables buscando soluciones, alternativas y tienen excelentes promos, también una tarjeta para tener descuentos.
    Me dejaron las uñas hermosas, venía de otro sitio que no me habían gustado, te explican todo, usan material de buena calidad.
    Responden los WhatsApp de forma agradable y rápida... Excelentes!!!!`,
      name: '-Paola Renna',
      link: 'https://maps.app.goo.gl/dDju2RhtrXBVSD5u9',
    },
    {
      comment:
        'Para destacar la puntualidad de las citas! Que se valora mucho. Mao me ha hecho los pies con semipermanente de maravilla, muy detallista y me quedaron super prolijos!!! Como unica critica, si bien tienen muchas opciones, agregaria mas paletas de colores',
      name: '-Catalina De Martini',
      link: 'https://maps.app.goo.gl/mG6ZLJLFLehRWPtGA',
    },
    {
      comment:
        'Tengo las uñas débiles y desde que me aconsejaron usar la base fortalecedora, han mejorado muchísimo. Las chicas son maravillosas y la atención personalizada cuidando las necesidades y gustos de cada uno!',
      name: '-Sofia Del Prado',
      link: 'https://maps.app.goo.gl/1TCKiGzF63nmNRYK7',
    },
  ];

  return (
    <main className='flex flex-col items-center'>
      <section className='relative flex w-full h-[45rem]'>
        <Image
          className='z-[-1] object-cover object-bottom brightness-95'
          src='/hero-2.jpeg'
          alt='Pies femeninos'
          style={{ backgroundImage: 'url(/hero-2.jpeg)' }}
          fill={true}
        />
        <div className='h-auto absolute right-[4rem] bottom-1/2 flex flex-col lg:flex-row p-0 m-0 items-end gap-8 text-white font-bold text-3xl'>
          <CustomButton text={'Tratamientos'} href={'/Tratamientos'} className='capitalize' />
          <CustomButton text={'Plató Fotográfico'} href={'/Plato'} className='capitalize' />
        </div>
      </section>
      <section className='text-center text-4xl lg:text-5xl w-full h-auto bg-primary text-white flex flex-col items-center justify-center border-t-[1px] border-b-[1px] gap-8 font-semibold py-16 font-mulish tracking-wide'>
        <h1>Diseños exclusivos:</h1>
        <h2>Manicura y pedicura en Barcelona</h2>
      </section>
      <section className='relative flex w-full h-auto lg:h-[45rem] justify-end items-center p-6 lg:p-16'>
        <Image
          className='z-[-1] object-cover object-bottom brightness-95'
          src='/support-3.jpeg'
          alt='Pies femeninos'
          style={{ backgroundImage: 'url(/support-3.jpeg)' }}
          fill={true}
        />
        <div className='w-full lg:w-[40rem] h-auto bg-black self-center flex flex-col p-10 py-20 m-0 items-start gap-8 text-white'>
          <p className='font-mulish text-xl'>
            Bienvenidos/as a Lookart, un centro de salud, belleza y fotografía, creado por Camila y
            Malena, jóvenes artistas y productoras de Buenos Aires, Argentina.
            <br />
            <br />
            Inspiradas por el arte en todas sus expresiones, decidimos llevar a cabo nuestro
            proyecto, el cual se propone unir las diferentes técnicas de belleza en conjunto con la
            salud en un espacio joven, emergente y creativo. Lookart se encuentra ubicado en la
            Villa Olímpica del Poblenou, un barrio dentro de Barcelona que se posiciona como uno de
            los más innovadores y vanguardistas, un barrio que impulsa a lo artístico e inspira al
            constante crecimiento de nuestra marca.
          </p>
          <CustomButton
            text={'Pedir una cita'}
            href={'https://lookartbcn.booksy.com'}
            className='text-xl bg-secondary'>
            <BiLinkExternal />
          </CustomButton>
        </div>
      </section>
      <section className='bg-black w-full py-28 px-4 lg:px-24 xl:px-48 2xl:px-60 border-none flex flex-col gap-10 justify-between items-center align-middle'>
        <h2 className='font-mulish text-3xl lg:text-5xl font-semibold text-center'>
          Qué piensan nuestras client@s
        </h2>
        <CustomCarousel>{comments}</CustomCarousel>
      </section>
      <section
        className='w-full h-[30rem] brightness-90 bg-cover bg-center flex flex-col lg:flex-row py-14 justify-center lg:justify-end items-center gap-10 px-0 lg:px-24 xl:px-48'
        style={{ backgroundImage: 'url(/support-4.jpeg)', backgroundPosition: 'center -0.01%' }}>
        <article className='bg-primary text-white ps-6 pe-48 py-8 bg-opacity-50 flex flex-col items-start gap-5 '>
          <h2 className='font-mulish text-2xl font-semibold'>Buscas un diseño de joyería dental</h2>
          <CustomButton
            text={'Reserva ahora'}
            href={'https://lookartbcn.booksy.com'}
            className='text-xl bg-secondary'>
            <BiLinkExternal />
          </CustomButton>
        </article>
      </section>
    </main>
  );
}

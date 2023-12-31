'use client';
import Image from 'next/image';
import { CustomAccordion } from '@/components/Accordion';
import {
  accordionDentalData,
  accordionEyeBrowsesData,
  accordionFeetData,
  accordionGuaShaData,
  accordionHandsData,
  accordionHandsData2,
  accordionManicureData,
  accordionMassageData,
  treatmentsImages,
  treatmentsImages2,
  treatmentsImages3,
  treatmentsImages4,
  treatmentsImages5,
  treatmentsImages6,
} from '@/lib/data';
import { ImageType } from '@/lib/types';
import { useState } from 'react';
import { ImageModalViewer } from '@/components/ImageModalViewer';
import { dataInfoCard } from '../page';
import { InfoCard } from '@/components/InfoCard';
import BookButton from '@/components/BookButton';
import { usePathname, useRouter } from 'next/navigation';
import { ButtonGroup, Button } from '../../lib/material-tailwind-components';

export default function Tratamientos() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeImageSet, setActiveImageSet] = useState<ImageType[]>([]);
  const router = useRouter();
  const pathname = usePathname();
  const handleNavigation = (hash: string) => {
    const path = `${pathname}${hash}`;
    router.push(path);
  };
  const handleOpenModal = (imageSet: ImageType[], index: number) => {
    setActiveImageSet(imageSet);
    setActiveImageIndex(index);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const navListMenuItems = [
    { title: 'Belleza manos', hash: '#belleza-manos' },
    { title: 'Belleza pies', hash: '#belleza-pies' },
    { title: 'Diseño de mirada', hash: '#mirada' },
    { title: 'Masajes corporales', hash: '#masajes' },
    { title: 'Gua Sha Facial', hash: '#gua-sha' },
    { title: 'Joyería dental', hash: '#dental' },
  ];

  return (
    <main className='flex flex-col items-center'>
      <section
        className='relative flex w-full h-[45rem] justify-center items-center md:justify-start md:pl-[2.5rem] lg:pl-[20vw] bg-fixed bg-cover bg-center'
        style={{ backgroundImage: 'url(/support-1.jpeg)' }}>
        <article className='bg-primary text-white bg-opacity-50 flex flex-col items-start gap-5 w-full md:w-1/2 lg:w-[34rem] xl:w-[40rem] justify-center px-8 py-8 '>
          <h2 className='font-mulish text-4xl md:leading-[3.5rem] lg:leading-[4rem] md:text-[2.75rem] lg:text-[3.125rem]  font-semibold'>
            Tu centro de belleza y arte de referencia en Barcelona
          </h2>
          <BookButton />
        </article>
      </section>
      <section className='bg-primary w-full text-center font-mulish font-bold px-6 pt-16 md:pt-20 md:px-9'>
        <h1 className='text-4xl md:text-[2.75rem] lg:text-[3.125rem] mb-4 md:mb-8'>
          Uñas de gel, laminado de cejas, masajes…
        </h1>
        <h2 className='text-lg md:text-4xl '>y muchos más en LookArtBCN:</h2>
      </section>
      <section className='bg-primary w-full flex align-center justify-center py-8 md:py-12'>
        <ButtonGroup className='max-w-5xl grid gap-1 grid-rows-2 grid-cols-3 px-6 lg:grid-rows-1 lg:grid-cols-6'>
          {navListMenuItems.map((item) => (
            <Button
              key={item.title}
              variant='filled'
              onClick={() => handleNavigation(item.hash)}
              className={`font-mulish text-md text-white bg-secondary font-bold tracking-wide hover:text-primary uppercase rounded-none w-full h-full z-0`}>
              {item.title}
            </Button>
          ))}
        </ButtonGroup>
      </section>
      <section
        className='relative flex w-full h-auto justify-end items-center p-6 lg:px-16'
        id='belleza-manos'>
        <Image
          className='z-[-1] object-cover object-center lg:object-[center_-350px] xl:object-[center_-750px] brightness-80'
          src='/support-5.jpeg'
          alt='Uñas femeninas'
          style={{ backgroundImage: 'url(/support-5.jpeg)' }}
          fill={true}
        />
        <div className='w-full md:w-[38rem] lg:w-[40rem] h-auto bg-black opacity-[0.85] self-center flex flex-col px-5 md:px-6 py-12 m-0 items-start gap-4 text-white font-raleway text-base '>
          <h2 className='font-mulish text-4xl md:text-[2.75rem] lg:text-5xl md:leading-[3rem] md:font-bold mb-6'>
            Belleza manos
          </h2>
          <p>
            Te animamos a explorar nuestras opciones de manicura y descubrir cómo podemos resaltar
            la belleza única de tus manos.
          </p>
          <p>
            En Look Art vemos la manicura como un acto de autenticidad y expresión personal. Pensada
            para abrazar la diversidad de estilos y gustos, nuestra oferta de manicura es para todas
            las personas que deseen cuidar sus manos y mostrar su propia esencia.
          </p>
          <div className='bg-black w-full border-none text-red-300'>
            <CustomAccordion
              data={accordionHandsData}
              headerStyles='px-2 my-4 font-medium'
              bodyStyles='px-2 text-base font-normal'
            />
          </div>
          <BookButton />
        </div>
      </section>
      <section className='bg-primary w-full font-mulish px-6 py-16 md:py-20 md:px-9'>
        <CustomAccordion
          data={accordionHandsData2}
          headerStyles='px-2 my-4 font-medium'
          bodyStyles='px-2 text-base font-normal'
        />
      </section>
      <section className='relative flex w-full h-auto justify-end items-center p-6 lg:px-16'>
        <Image
          className='z-[-1] object-cover object-center lg:object-[center_-350px] xl:object-[center_-750px] brightness-80'
          src='/support-6.jpeg'
          alt='Uñas femeninas'
          style={{ backgroundImage: 'url(/support-6.jpeg)' }}
          fill={true}
        />
        <div className='w-full md:w-[38rem] lg:w-[40rem] h-auto bg-black opacity-[0.85] self-center flex flex-col px-5 md:px-6 py-12 m-0 items-start gap-4 text-white font-raleway text-base '>
          <h2 className='font-mulish text-4xl md:text-[2.75rem] lg:text-5xl md:leading-[3rem] md:font-bold mb-6'>
            NAIL ART
          </h2>
          <p>
            Desde diseños clásicos y elegantes hasta creaciones audaces y artísticas, nuestro equipo
            de manicuristas talentosas está dedicado a crear arte en cada uña.
          </p>
          <p>
            Ya sea que desees una manicura clásica, un tratamiento de hidratación para uñas dañadas
            o un diseño artístico y llamativo, puedes confiar en que en nuestro centro, cuidaremos
            la salud de tus manos con el máximo respeto y atención. ¡Ven y déjanos mimar tus uñas,
            para que siempre luzcan impecables y saludables!
          </p>
          <div className='bg-black w-full border-none'>
            <CustomAccordion
              data={accordionManicureData}
              headerStyles='px-2 my-4 font-medium'
              bodyStyles='px-2 text-base font-normal'
            />
          </div>
          <BookButton />
        </div>
      </section>
      <section className='bg-primary w-full h-auto px-0 md:px-4 lg:px-8 py-8 lg:py-16 xl:py-24 2xl:py-32 gap-0 grid grid-cols-5'>
        {treatmentsImages.map((img, index) => (
          <article
            key={img.src}
            className='relative w-full aspect-square overflow-hidden cursor-zoom-in'
            onClick={() => handleOpenModal(treatmentsImages, index)}>
            <Image
              src={img.src}
              alt={img.content}
              fill={true}
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className='transition-all duration-500 object-cover object-center hover:brightness-75 hover:scale-110'
            />
          </article>
        ))}
      </section>
      <section
        className='bg-primary w-full font-mulish px-6 py-16 md:py-20 md:px-9 lg:py-28 lg:px-16 flex items-center justify-center'
        id='belleza-pies'>
        <div className='flex flex-col items-center max-w-7xl'>
          <h2 className='text-[1.6875rem] leading-[2.0625rem] md:text-4xl lg:text-[2.5rem] lg:leading[2.75rem] mb-8 self-start'>
            BELLEZA PIES
          </h2>
          <div className='flex flex-col md:flex-row  gap-4 md:gap-6 lg:gap-8 self-center'>
            <article className='flex flex-col gap-4 basis-1/2'>
              <p>
                En LOOK ART queremos recordarte lo especiales que son tus pies. Son fieles
                compañeros que te llevan a donde quieras ir. Recuerda siempre dedicarles tiempo y
                cariño, ¡te lo agradecerán con cada paso que des!
              </p>
              <p>
                También sabemos que el tiempo puede ser un recurso valioso. Es por eso que ofrecemos
                opciones de pedicura que se adaptan a tus necesidades y disponibilidad.
              </p>
              <p>
                Si buscas una opción rápida pero efectiva, nuestra pedicura express es perfecta para
                ti. En poco tiempo, nuestras especialistas darán un toque de belleza y cuidado a tus
                pies, dejándolos listos para lucir y sentirse bien.
              </p>
              <p>
                Si dispones de tiempo para un momento de relajación más extenso, te invitamos a
                disfrutar de la pedicura SPA, donde podrás sumergirte en una experiencia de
                bienestar completa.
              </p>
              <p>¡Te esperamos para consentir tus pies y celebrar su importancia en tu vida!</p>
              <div className='py-4'>
                <BookButton />
              </div>
            </article>
            <article className='flex flex-col gap-4 basis-1/2'>
              <p>
                Si dispones de tiempo para un momento de relajación más extenso, te invitamos a
                disfrutar de la pedicura SPA, donde podrás sumergirte en una experiencia de
                bienestar completa.
              </p>
              <p>¡Te esperamos para consentir tus pies y celebrar su importancia en tu vida!</p>
              <div className=' w-full border-none'>
                <CustomAccordion
                  data={accordionFeetData}
                  headerStyles='px-2 my-4 font-medium'
                  bodyStyles='px-2 text-base font-normal'
                />
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className='bg-primary w-full h-auto px-0 md:px-4 lg:px-8 py-8 lg:py-16 xl:py-24 2xl:py-32 gap-0 grid grid-cols-5'>
        {treatmentsImages2.map((img, index) => (
          <article
            key={img.src}
            className='relative w-full aspect-square overflow-hidden cursor-zoom-in'
            onClick={() => handleOpenModal(treatmentsImages2, index)}>
            <Image
              src={img.src}
              alt={img.content}
              fill={true}
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className='transition-all duration-500 object-cover object-center hover:brightness-75 hover:scale-110'
            />
          </article>
        ))}
      </section>
      <section
        className='relative flex w-full h-auto justify-end items-center p-6 lg:px-16 overflow-hidden'
        id='mirada'>
        <div className='w-full md:w-[38rem] lg:w-[40rem] h-auto bg-black opacity-[0.85] self-center flex flex-col px-5 md:px-6 py-12 m-0 items-start gap-4 text-white font-raleway text-base '>
          <h2 className='font-mulish text-4xl md:text-[2.75rem] lg:text-5xl md:leading-[3rem] md:font-bold mb-6'>
            DISEÑO DE LA MIRADA
          </h2>
          <p>
            En LOOK ART nuestras profesionales en diseño de cejas y pestañas son verdaderas
            artistas. Trabajan con meticulosidad y dedicación para crear una mirada que realce tus
            rasgos faciales de manera única y personalizada.
          </p>
          <p>
            Sabemos que cada rostro es diferente, por lo que nuestras expertas toman el tiempo para
            comprender tus preferencias y características individuales.
          </p>
          <div className='bg-black w-full border-none'>
            <CustomAccordion
              data={accordionEyeBrowsesData}
              headerStyles='px-2 my-4 font-medium'
              bodyStyles='px-2 text-base font-normal'
            />
          </div>
          <BookButton />
        </div>
        <video
          src='/Diseno-cejas-1.mp4'
          autoPlay
          loop
          muted
          className='absolute right-0 w-full h-full z-[-1] object-cover object-center'></video>
      </section>
      <section className='relative flex w-full h-auto justify-center items-center p-6 lg:px-16'>
        <Image
          className='z-[-1] object-cover object-center brightness-80'
          src='/support-7.jpg'
          alt='Habitación roja'
          style={{ backgroundImage: 'url(/support-7.jpg)' }}
          fill={true}
        />
        <div className='w-full lg:w-[40rem] h-auto bg-black opacity-[0.85] self-center flex flex-col px-5 md:px-12 py-12 m-0 items-start gap-4 text-white font-raleway text-base '>
          <h2 className='font-mulish text-3xl md:text-4xl md:leading-[3rem] font-bold mb-6 text-center self-center'>
            PROMO BELLEZA DE LA MIRADA:
          </h2>
          <p>Depilación con hilo + laminado + tinte : antes 45€ – ahora 40€</p>
          <p>Diseño de cejas + depilación con hilo + laminado : antes 45€ – ahora 42€</p>
          <p>Diseño de cejas + depilación con hilo + laminado + tinte : antes 53€ – ahora 50€</p>
          <p>
            Depilación con hilo + laminado + lifting de pestañas con tinte : antes 75€ – ahora 65€
          </p>
          <div className='self-center pt-6'>
            <BookButton />
          </div>
        </div>
      </section>
      <section className='bg-primary w-full h-auto px-0 md:px-4 lg:px-8 py-8 lg:py-16 xl:py-24 2xl:py-32 gap-0 grid grid-cols-5'>
        {treatmentsImages3.map((img, index) => (
          <article
            key={img.src}
            className='relative w-full aspect-square overflow-hidden cursor-zoom-in'
            onClick={() => handleOpenModal(treatmentsImages3, index)}>
            <Image
              src={img.src}
              alt={img.content}
              fill={true}
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className='transition-all duration-500 object-cover object-center hover:brightness-75 hover:scale-110'
            />
          </article>
        ))}
      </section>
      <section
        className='bg-primary w-full font-mulish px-6 py-16 md:py-20 md:px-9 lg:py-28 lg:px-16 flex items-center justify-center'
        id='masajes'>
        <div className='flex flex-col items-center max-w-7xl'>
          <h2 className='text-[1.6875rem] leading-[2.0625rem] md:text-4xl lg:text-[2.5rem] lg:leading[2.75rem] mb-8 self-start font-semibold'>
            MASAJES
          </h2>
          <div className='flex flex-col md:flex-row  gap-4 md:gap-6 lg:gap-8 self-center'>
            <article className='flex flex-col gap-4 basis-1/2'>
              <h3 className='text-xl font-semibold'>Masajes descontracturantes & relajantes</h3>
              <p>
                En nuestro centro, el masaje se convierte en algo mas que un contacto o una perfecta
                técnica. Es la energía que se mueve por el cuerpo y se transfiere a modo de mensaje,
                una forma única de comunicarse a través de las manos, transmitiendo cariño y
                cuidado, una energía sanadora que promueve la relajación corporal y mental.
              </p>
              <h3 className='text-xl font-semibold'>Masaje Hawaiano «Lomi Lomi Nui»</h3>
              <p>
                Masaje integral Hawaiano relajante/descontracturante de cuerpo entero que se
                caracteriza por su efecto envolvente, enérgico y rítmico.
              </p>
              <p>
                Los pases largos de pies a cabeza invitan a vivir una experiencia similar a ser
                movido por las olas del mar.
              </p>
            </article>
            <article className='flex flex-col gap-4 basis-1/2'>
              <p>
                Trabajamos tanto a nivel de la fascia(promoviendo un mejor funcionamiento del
                sistema linfático) como disminuyendo la tensión acumulada en la musculatura
                profunda.
              </p>
              <p>
                Este masaje está indicado para aliviar contracturas y mitigar el dolor en lumbares,
                hombros y cervicales.
              </p>
              <p>
                Por último deseamos que en nuestro centro puedas estar inmersa/o en tu auto-cuidado,
                que puedas perder la noción del tiempo y que sientas la seguridad y confianza que
                brindamos para tu bienestar.
              </p>
              <div className=' w-full border-none'>
                <CustomAccordion
                  data={accordionMassageData}
                  headerStyles='px-2 my-4 font-medium'
                  bodyStyles='px-2 text-base font-normal'
                />
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className='bg-primary w-full h-auto px-0 md:px-4 lg:px-8 py-8 lg:py-16 xl:py-24 2xl:py-32 gap-0 grid grid-cols-5'>
        {treatmentsImages4.map((img, index) => (
          <article
            key={img.src}
            className='relative w-full aspect-square overflow-hidden cursor-zoom-in'
            onClick={() => handleOpenModal(treatmentsImages4, index)}>
            <Image
              src={img.src}
              alt={img.content}
              fill={true}
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className='transition-all duration-500 object-cover object-center hover:brightness-75 hover:scale-110'
            />
          </article>
        ))}
      </section>
      <section
        className='relative flex w-full h-auto justify-end items-center p-6 lg:px-16'
        id='gua-sha'>
        <Image
          className='z-[-1] object-cover object-center brightness-80'
          src='/support-8.jpeg'
          alt='Uñas femeninas'
          style={{ backgroundImage: 'url(/support-8.jpeg)' }}
          fill={true}
        />
        <div className='w-full md:w-[38rem] lg:w-[40rem] h-auto bg-black opacity-[0.85] self-center flex flex-col px-5 md:px-6 py-12 m-0 items-start gap-4 text-white font-raleway text-base '>
          <h2 className='font-mulish text-4xl md:text-[2.75rem] lg:text-5xl md:leading-[3rem] md:font-bold mb-6'>
            Gua Sha FACIAL
          </h2>
          <h3 className='font-mulish text-2xl font-semibold '>Ritual facial con piedra Gua Sha</h3>
          <p>¿Alguna vez has recibido un masaje facial?</p>
          <p>
            Más allá de todos los beneficios que posee a nivel salud, es un encuentro maravilloso
            contigo misma/o.
          </p>
          <p>
            La cara posee alrededor de 43 músculos que están en acción todos los días. Imagina la
            sensación de placer al darles atención y cuidado.
          </p>
          <p>
            Además este ritual facial se realiza con la piedra Gua Sha, la cual otorga energía vital
            a nuestro cuerpo.
          </p>
          <p>
            Una experiencia que nos ayuda a eliminar toxinas mientras relaja nuestra musculatura,
            liberando tensiones en mandíbula, cuello y escote.
          </p>
          <div className='bg-black w-full border-none'>
            <CustomAccordion
              data={accordionGuaShaData}
              headerStyles='px-2 my-4 font-medium'
              bodyStyles='px-2 text-base font-normal'
            />
          </div>
          <BookButton />
        </div>
      </section>
      <section className='bg-primary w-full h-auto px-0 md:px-4 lg:px-8 py-8 lg:py-16 xl:py-24 2xl:py-32 gap-0 grid grid-cols-5'>
        {treatmentsImages5.map((img, index) => (
          <article
            key={img.src}
            className='relative w-full aspect-square overflow-hidden cursor-zoom-in'
            onClick={() => handleOpenModal(treatmentsImages5, index)}>
            <Image
              src={img.src}
              alt={img.content}
              fill={true}
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className='transition-all duration-500 object-cover object-center hover:brightness-75 hover:scale-110'
            />
          </article>
        ))}
      </section>

      <section
        className='bg-primary w-full font-mulish px-6 py-16 md:py-20 md:px-9 lg:py-28 lg:px-16 flex items-center justify-center'
        id='dental'>
        <div className='flex flex-col items-center max-w-7xl'>
          <h2 className='text-[1.6875rem] leading-[2.0625rem] md:text-4xl lg:text-[2.5rem] lg:leading[2.75rem] mb-8 self-start font-semibold'>
            JOYERIA DENTAL
          </h2>
          <div className='flex flex-col md:flex-row  gap-4 md:gap-6 lg:gap-8 self-center'>
            <article className='flex flex-col gap-4 basis-1/2'>
              <h3 className='text-xl font-semibold'>
                Colocación de Cristales dentales «Swarovski»
              </h3>
              <p>
                En nuestro centro de belleza, también ofrecemos servicios de colocación de cristales
                dentales para aquellas personas que deseen agregar un toque de brillo y originalidad
                a su sonrisa.
              </p>
              <p>
                Utilizamos cristales dentales de alta calidad y adherentes dentales seguros, de esta
                manera ofrecerles un servicio cómodo y duradero.
              </p>
              <div className='mt-4'>
                <BookButton />
              </div>
            </article>
            <article className='flex flex-col gap-4 basis-1/2'>
              <p>
                Los cristales son una excelente manera de expresar tu estilo y personalidad, ya que
                están disponibles en diferentes colores y formas. Puedes elegir un diseño sutil para
                un brillo discreto o optar por algo mas llamativo y audaz.
              </p>
              <p>
                Nuestra prioridad es ofrecerte una experiencia cercana y amable, para que te sientas
                confiada/o y feliz con tu nueva sonrisa brillante.
              </p>

              <div className=' w-full border-none'>
                <CustomAccordion
                  data={accordionDentalData}
                  headerStyles='px-2 my-4 font-medium'
                  bodyStyles='px-2 text-base font-normal'
                />
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className='bg-primary w-full h-auto px-0 md:px-4 lg:px-8 py-8 lg:py-16 xl:py-24 2xl:py-32 gap-0 grid grid-cols-5'>
        {treatmentsImages6.map((img, index) => (
          <article
            key={img.src}
            className='relative w-full aspect-square overflow-hidden cursor-zoom-in'
            onClick={() => handleOpenModal(treatmentsImages6, index)}>
            <Image
              src={img.src}
              alt={img.content}
              fill={true}
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className='transition-all duration-500 object-cover object-center hover:brightness-75 hover:scale-110'
            />
          </article>
        ))}
      </section>
      <section
        className='w-full sm:h-[90rem] lg:h-[30rem] bg-fixed brightness-90 bg-cover bg-center flex flex-col lg:flex-row py-14 justify-center items-center gap-10 px-0 lg:px-24 xl:px-48'
        style={{ backgroundImage: 'url(/support-2.jpeg)' }}>
        <InfoCard data={dataInfoCard} />
      </section>
      {modalOpen && (
        <ImageModalViewer
          images={activeImageSet}
          showIndex={true}
          showPreview={true}
          activeIndex={activeImageIndex}
          onClose={handleCloseModal}
        />
      )}
    </main>
  );
}

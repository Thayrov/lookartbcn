import Image from 'next/image';
import { BiLogoInstagram, BiLogoWhatsapp } from '../../lib/react-icons-imports';
import { Form } from '@/components/Form';

export default function Contacto() {
  return (
    <main className='flex flex-col items-center'>
      <section className='relative block w-full h-[50vh] bg-cover bg-center'>
        <div className='relative w-full h-full'>
          <Image
            className='z-[-1] object-cover object-center brightness-95 md:object-[center_-200px] lg:object-[center_-300px] xl:object-[center_-500px]'
            src='/hero-4.jpeg'
            alt='Fachada de Lookartbcn'
            fill={true}
          />
        </div>
      </section>

      <section className='w-full h-auto bg-primary text-white flex flex-col items-center justify-center gap-8 py-32 font-raleway tracking-wide font-medium px-8'>
        <h1 className='text-3xl lg:text-5xl font-semibold'>¿Dónde encontrarnos?</h1>
        <hr className='block w-24 h-[2px] bg-secondary border-0 mx-auto'></hr>
        <p className='text-base max-w-[820px] text-center'>
          Queremos ser tu espacio de bienestar y sentirte mimad@, que puedas expresarte con los
          diseños que nos propongas o puedas disfrutar de nuestras propuestas. Somos un centro de
          profesionales cualificado que nos enfocamos en hacerte sentir como en casa, y que salgas
          radiante y recargado de buenas vibras.
        </p>
        <p className='text-base max-w-[820px] text-center'>
          ¿Sabías que también alquilamos nuestro local como centro artístico y que tenemos un plató
          profesional?
        </p>

        <p className='text-base max-w-[820px] text-center'>
          ¿Has oído de nuestras ofertas flash y de temporada? <br /> No queremos que te pierdas
          nada, síguenos en nuestras redes sociales:
        </p>
        <div className='flex items-center mb-4 md:mb-0 space-x-4'>
          <a
            className='bg-secondary rounded-full mt-2 p-[6px]'
            href='https://www.instagram.com/lookartbcn/'
            target='_blank'
            rel='noreferrer'>
            <BiLogoInstagram className='text-white text-5xl cursor-pointer' />
          </a>
          <a
            className='bg-green-400	 rounded-full mt-2 p-[6px]'
            href='https://wa.me/34645044485'
            target='_blank'
            rel='noreferrer'>
            <BiLogoWhatsapp className='text-white text-5xl cursor-pointer' />
          </a>
        </div>
      </section>

      <section className='flex align-center justify-center w-full h-auto lg:h-[52rem] overflow-hidden relative bg-primary'>
        <div className='flex flex-col md:flex-row md:gap-8  px-2 md:px-8 lg:px-24 pb-20  w-full lg:max-w-[1200px]'>
          <div className='flex flex-col align-center justify-start px-4 py-16 w-full lg:py-20 bg-gray-100 gap-4  lg:w-1/2'>
            <p className='text-2xl text-black text-center font-semibold'>
              ¿Tienes dudas? Rellena el siguiente formulario
            </p>
            <p className='text-lg text-black text-center'>
              Los campos marcados con <span className='text-red-500'>*</span> son obligatorios
            </p>
            <Form />
          </div>
          <div className='flex flex-col align-center justify-between px-4 py-16 w-full lg:pt-20 bg-gray-100 text-black gap-8 lg:gap-4 lg:w-1/2'>
            <div className='flex flex-col align-center justify-center mb-4 md:mb-0 text-center gap-4'>
              <h3 className='text-2xl mb-2 font-semibold'>Datos de contacto</h3>
              <p className='text-xl'>
                <a href='tel:645044485' className='cursor-pointer underline hover:text-gray-400'>
                  645 044 485
                </a>{' '}
                |{' '}
                <a href='tel:931059346' className='cursor-pointer underline hover:text-gray-400'>
                  931 059 346
                </a>
              </p>
              <p className='text-xl'>
                <a
                  href='mailto:lookartbcn@gmail.com'
                  className='cursor-pointer underline hover:text-gray-400 '>
                  lookartbcn@gmail.com
                </a>
              </p>
            </div>

            <div className='mb-4 md:mb-0 text-center'>
              <h3 className='text-2xl mb-2 font-semibold'>Dirección</h3>
              <p className='text-xl'>C/ de Ramon Turró, 69 Esquina,</p>
              <p className='text-xl'>08005 Barcelona, España</p>
            </div>

            <iframe
              title='LookART BCN'
              src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11972.330494041244!2d2.194715!3d41.394012!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a35fabcb338b%3A0x94fdc5b0131b00a5!2sLookART%20BCN!5e0!3m2!1sen!2snl!4v1703204709590!5m2!1sen!2snl'
              className='border-none w-full mb-10 aspect-video'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}

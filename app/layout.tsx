import Header from '@/components/header';
import './globals.css';

import Footer from '@/components/footer';
import { inter, mulish, stencil } from '@/lib/fonts';

export const metadata = {
  title: 'Lookartbcn',
  description:
    'Centro de salud, belleza y fotografía, creado por Camila y Malena, jóvenes artistas y productoras de Buenos Aires, Argentina.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='es'
      className={`!scroll-smooth ${inter.variable} ${mulish.variable} ${stencil.variable}`}>
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative`}>
        <div className='bg-[#fcefd8] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]'></div>
        <div className='bg-[#addbdb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

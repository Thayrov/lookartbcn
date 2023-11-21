import Header from '@/components/Header';
import './globals.css';

import Footer from '@/components/Footer';
import { raleway, mulish, stencil } from '@/lib/fonts';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'Lookartbcn',
  description:
    'Centro de salud, belleza y fotografía, creado por Camila y Malena, jóvenes artistas y productoras de Buenos Aires, Argentina.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='es'
      className={`!scroll-smooth ${raleway.variable} ${mulish.variable} ${stencil.variable} antialiased`}>
      <body className={`${raleway.className} bg-black text-white relative`}>
        <Header />
        {children}
        <Footer />
        <Toaster position='bottom-right' />
      </body>
    </html>
  );
}

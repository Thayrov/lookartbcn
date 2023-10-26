import { Big_Shoulders_Stencil_Text, Mulish, Raleway } from 'next/font/google';

export const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' });
export const mulish = Mulish({ subsets: ['latin'], variable: '--font-mulish' });
export const stencil = Big_Shoulders_Stencil_Text({
  subsets: ['latin'],
  variable: '--font-stencil',
});

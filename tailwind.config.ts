import type { Config } from 'tailwindcss';
import withMT from '@material-tailwind/react/utils/withMT';

const config: Config = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2B2B2B',
        secondary: '#E800DC',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        raleway: ['var(--font-raleway)'],
        mulish: ['var(--font-mulish)'],
        stencil: ['var(--font-stencil)'],
      },
    },
  },
  plugins: [],
}) as Config;
export default config;

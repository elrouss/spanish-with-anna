import { Manrope, Raleway } from 'next/font/google';

export const manrope = Manrope({
  weight: ['400', '600', '700],
  style: 'normal',
  subsets: ['cyrillic', 'latin'],
  fallback: ['Arial', 'Helvetica', 'sans-serif'],
  display: 'swap',
  variable: '--font-manrope',
});

export const raleway = Raleway({
  weight: '600',
  style: 'normal',
  subsets: ['cyrillic', 'latin'],
  fallback: ['Arial', 'Helvetica', 'sans-serif'],
  display: 'swap',
  variable: '--font-raleway',
});

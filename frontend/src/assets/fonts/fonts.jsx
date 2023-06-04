import { Poppins, Raleway } from 'next/font/google';

export const poppins = Poppins({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  fallback: ['Arial', 'Helvetica', 'sans-serif'],
});

export const raleway = Raleway({
  weight: '600',
  style: 'normal',
  subsets: ['cyrillic'],
  fallback: ['Arial', 'Helvetica', 'sans-serif'],
});

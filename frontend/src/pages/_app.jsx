import '@/styles/globals.scss';

import { manrope, raleway } from '@/assets/fonts/fonts';

export default function App({ Component, pageProps }) {
  return (
    <div className={`${manrope.variable} ${raleway.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}

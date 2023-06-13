import { register } from 'swiper/element/bundle';

import '@/styles/globals.scss';

register();

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

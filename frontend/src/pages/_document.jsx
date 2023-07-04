import { Html, Head, Main, NextScript } from 'next/document';

import { manrope } from '@/assets/fonts/fonts';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <div className={manrope.variable} id="modals" />
        <NextScript />
      </body>
    </Html>
  );
}

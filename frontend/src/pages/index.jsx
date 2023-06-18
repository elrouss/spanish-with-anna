import Head from 'next/head';
import Intro from '../components/Intro/Intro';
import { manrope, raleway } from '@/assets/fonts/fonts';

import Header from '../components/Header/Header';
import Facts from '@/components/Facts/Facts';
import Info from '@/components/Info/Info';
import StudyingBenefits from '@/components/StudyingBenefits/StudyingBenefits';
import Reviews from '@/components/Reviews/Reviews';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      <main className={`${manrope.variable} ${raleway.variable}`}>
        <Intro />
        <Facts />
        <Info />
        <StudyingBenefits />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}

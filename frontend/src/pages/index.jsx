import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header/Header';
import Intro from '../components/Intro/Intro';
import Facts from '@/components/Facts/Facts';
import Info from '@/components/Info/Info';
import StudyingBenefits from '@/components/StudyingBenefits/StudyingBenefits';
import DecorativeBackground from '@/components/DecorativeBackground/DecorativeBackground';
import Signup from '../components/Signup/Signup';
import Reviews from '@/components/Reviews/Reviews';
import FAQ from '@/components/FAQ/FAQ';
import ServicesTranslation from '@/components/ServicesTranslation/ServicesTranslation';
import Footer from '@/components/Footer/Footer';

import ModalOverlay from '@/components/ModalOverlay/ModalOverlay';
import Feedback from '@/components/forms/Feedback/Feedback';

export default function Home() {
  const [isFeedbackOpened, setIsFeedbackOpened] = useState(false);

  const handleFeedbackOpen = () => {
    setIsFeedbackOpened(true);
  };

  const handleFeedbackClose = () => {
    setIsFeedbackOpened(false);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Intro />
        <Facts />
        <Info />
        <StudyingBenefits />
        <DecorativeBackground />
        <Signup />
        <Reviews />
        <FAQ onModalOpen={handleFeedbackOpen} />
        <ServicesTranslation />
      </main>
      <Footer onModalOpen={handleFeedbackOpen} />

      <ModalOverlay
        id="feedback"
        isModalOpened={isFeedbackOpened}
        onModalClose={handleFeedbackClose}
      >
        <Feedback
          isModalOpened={isFeedbackOpened}
          onModalClose={handleFeedbackClose}
        />
      </ModalOverlay>
    </>
  );
}

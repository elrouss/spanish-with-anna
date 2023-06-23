import { useCallback, useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import Review from './Review/Review';
import CarouselButton from './CarouselButton/CarouselButton';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import ReviewDetails from './ReviewDetails/ReviewDetails';

import reviews from '@/utils/data/reviews';

import 'swiper/scss';
import 'swiper/scss/pagination';
import styles from './Reviews.module.scss';

function Reviews() {
  const [randomReviews, setRandomReviews] = useState([]);
  const [currentReview, setCurrentReview] = useState({
    name: '',
    text: '',
    image: '',
  });
  const [isModalOpened, setIsModalOpened] = useState(false);

  const swiperRef = useRef();

  useEffect(() => {
    const copy = [...reviews];
    const MAX_NUMBER = 10; // the number should be even on desktop

    // Fisher–Yates shuffle
    for (let i = 0; i < reviews.length; i += 1) {
      const j = Math.floor(Math.random() * (i + 1));

      [copy[i], copy[j]] = [copy[j], copy[i]];
    }

    setRandomReviews(copy.slice(0, MAX_NUMBER));
  }, []);

  const handleModalOpen = useCallback(({ name, text, image }) => {
    setIsModalOpened(true);

    setCurrentReview({ name, text, image });
  }, []);

  const handleModalClose = () => {
    setIsModalOpened(false);

    // The speed of clearing object is the same
    // as the animation of modal's closing
    setTimeout(
      () =>
        setCurrentReview({
          name: '',
          text: '',
          image: '',
        }),
      300
    );
  };

  return (
    <>
      <section>
        <div className={styles.wrapper}>
          <h2 className={styles.heading}>Отзывы учеников</h2>
          <div
            className={styles.carouselContainer}
            role="region"
            aria-roledescription="carousel"
            aria-label="10 отзывов о курсах Анны"
          >
            <CarouselButton ref={swiperRef} direction="previous" />
            {/* Additional wrapper below for drop-shadow effect without cut-off */}
            <div className={styles.swiperWrapper}>
              <Swiper
                className={styles.carousel}
                aria-atomic={false}
                aria-live="polite"
                modules={[Pagination]}
                slidesPerGroup={2}
                slidesPerView={2}
                spaceBetween={65}
                pagination={{
                  bulletActiveClass: styles.carouselBulletActive,
                  clickable: true,
                }}
                speed={600}
                loop
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
              >
                {randomReviews.map(({ _id, name, text, image }, i) => (
                  <SwiperSlide key={`slide-${_id}`} role="tabpanel">
                    <Review
                      key={`review-${_id}`}
                      name={name}
                      text={text}
                      image={image}
                      slideNum={i}
                      onModalOpen={handleModalOpen}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <CarouselButton ref={swiperRef} direction="next" />
          </div>
        </div>
      </section>

      <ModalOverlay
        id="review-details"
        isModalOpened={isModalOpened}
        onModalClose={handleModalClose}
      >
        <ReviewDetails
          currentReview={currentReview}
          onModalClose={handleModalClose}
        />
      </ModalOverlay>
    </>
  );
}

export default Reviews;

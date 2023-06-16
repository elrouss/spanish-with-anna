import { useRef } from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Review from './Review/Review';
import CarouselButton from './CarouselButton/CarouselButton';

import reviews from '@/utils/data/reviews';

import styles from './Reviews.module.scss';

import 'swiper/scss';
import 'swiper/scss/pagination';

function Reviews() {
  const swiperRef = useRef();

  return (
    <section>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>ОТЗЫВЫ УЧЕНИКОВ</h2>
        <div className={styles.carouselContainer}>
          <CarouselButton ref={swiperRef} direction="previous" />
          {/* Additional wrapper below for drop-shadow effect without cut-off */}
          <div className={styles.swiperWrapper}>
            <Swiper
              className={styles.carousel}
              modules={[Pagination]}
              slidesPerGroup={2}
              slidesPerView={2}
              spaceBetween={65}
              pagination={{
                bulletActiveClass: styles.carouselBulletActive,
              }}
              speed={600}
              loop
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              {reviews.map(({ _id, name, text, image }) => (
                <SwiperSlide key={`slide-${_id}`}>
                  <Review
                    key={`review-${_id}`}
                    name={name}
                    text={text}
                    image={image}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <CarouselButton ref={swiperRef} direction="next" />
        </div>
      </div>
    </section>
  );
}

export default Reviews;

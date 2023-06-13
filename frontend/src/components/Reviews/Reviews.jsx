import Review from '../Review/Review';

import reviews from '@/utils/data/reviews';

import styles from './Reviews.module.scss';

function Reviews() {
  return (
    <section>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>ОТЗЫВЫ УЧЕНИКОВ</h2>
        <div className={styles.slider}>
          <swiper-container
            cssMode
            slides-per-group="2"
            slides-per-view="2"
            space-between="21"
            speed="600"
            loop
            pagination-clickable
            navigation
          >
            {reviews.map(({ _id, name, text, image }) => (
              <swiper-slide
                key={`slide-${_id}`}
                // cssMode
                class="swiper-slide-next test"
                // className={styles.slide}
              >
                <Review
                  key={`review-${_id}`}
                  name={name}
                  text={text}
                  image={image}
                />
              </swiper-slide>
            ))}
          </swiper-container>
        </div>
      </div>
    </section>
  );
}

export default Reviews;

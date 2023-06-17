import { memo } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import styles from './Review.module.scss';

function Review({ name, text, image, i, onModalOpen }) {
  const currentReview = { name, text, image };

  return (
    <article className={styles.review}>
      <div className={styles.wrapper}>
        <div className={styles.person}>
          <Image
            className={styles.avatar}
            width={72}
            height={72}
            src={image}
            alt={`Ученик Анны - ${name}`}
            priority
          />
          <h3 className={styles.name}>{name}</h3>
        </div>
        <div className={styles.text}>
          <p className={styles.paragraph}>{text}</p>
          <button
            className={styles.more}
            type="button"
            aria-labelledby={`Слайд ${i + 1}`}
            aria-haspopup
            onClick={() => onModalOpen(currentReview)}
          >
            Читать полностью
          </button>
        </div>
      </div>
    </article>
  );
}

Review.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  i: PropTypes.number.isRequired,
  onModalOpen: PropTypes.func.isRequired,
};

export default memo(Review);

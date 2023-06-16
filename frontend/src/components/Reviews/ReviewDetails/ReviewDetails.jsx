import PropTypes from 'prop-types';

import Image from 'next/image';

import styles from './ReviewDetails.module.scss';

function ReviewDetails({ currentReview: { name, text, image }, onModalClose }) {
  return (
    <div className={styles.modal}>
      <div className={styles.wrapper}>
        <div className={styles.person}>
          {image && (
            <Image
              className={styles.avatar}
              width={72}
              height={72}
              src={image}
              alt={`Ученик Анны - ${name}`}
            />
          )}
          <h2 className={styles.name}>{name}</h2>
        </div>
        <p className={styles.paragraph}>{text}</p>
      </div>
      <button
        className={styles.closeButton}
        type="button"
        aria-label="Закрыть модальное окно с отзывом ученика Анны"
        onClick={onModalClose}
      />
    </div>
  );
}

ReviewDetails.propTypes = {
  currentReview: PropTypes.shape({
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onModalClose: PropTypes.func.isRequired,
};

export default ReviewDetails;

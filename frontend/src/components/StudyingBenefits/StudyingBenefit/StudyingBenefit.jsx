import PropTypes from 'prop-types';

import Image from 'next/image';

import styles from './StudyingBenefit.module.scss';

function StudyingBenefit({ heading, text, image, alt, width, height }) {
  return (
    <>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          width={width}
          height={height}
          src={image}
          alt={`Декоративная иконка: ${alt.toLowerCase()}`}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.heading}>{heading}</h3>
        <p className={styles.text}>{text}</p>
      </div>
    </>
  );
}

StudyingBenefit.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default StudyingBenefit;

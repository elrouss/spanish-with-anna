import Image from 'next/image';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import styles from './Info.module.scss';

function InfoCard({ title, description, image, link }) {
  return (
    <article className={styles.card}>
      <Image
        className={styles.cardImage}
        src={image}
        width={373}
        height={167}
        alt={title}
      />
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <Button classSelector={styles.button} href={link}>
        Подробнее
      </Button>
    </article>
  );
}

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default InfoCard;

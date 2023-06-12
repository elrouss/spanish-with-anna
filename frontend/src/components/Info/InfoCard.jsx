import Image from 'next/image';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import styles from './Info.module.scss';

function InfoCard({ title, description, image, link }) {
  return (
    <div className={styles.card}>
      <Image
        className={styles.cardImage}
        src={image}
        width={100}
        height={80}
        alt={`Изображение ${title}`}
      />
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <Button classSelector={styles.cardButton} href={link}>
        Подробнее
      </Button>
    </div>
  );
}

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.element.isRequired,
  link: PropTypes.string.isRequired,
};

export default InfoCard;

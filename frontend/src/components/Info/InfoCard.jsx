import Image from 'next/image';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import styles from './Info.module.scss';

function InfoCard({ title, description, image, link }) {
  const descriptions = description.map((d) => (
    <p className={styles.cardDescription}>{d}</p>
  ));
  return (
    <div className={styles.card}>
      <Image
        className={styles.cardImage}
        src={image}
        width={373}
        height={167}
        style={{ objectFit: 'cover' }}
        alt={`Изображение ${title}`}
      />
      <h3 className={styles.cardTitle}>{title}</h3>
      {descriptions}
      <Button classSelector={styles.button} href={link}>
        Подробнее
      </Button>
    </div>
  );
}

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  link: PropTypes.string.isRequired,
};

export default InfoCard;

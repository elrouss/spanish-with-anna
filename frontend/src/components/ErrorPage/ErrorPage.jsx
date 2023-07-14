import PropTypes from 'prop-types';
import Image from 'next/image';
import Header from '../Header/Header';
import Button from '../UI/Button/Button';
import ROUTES from '@/utils/constants/routes';
import styles from './ErrorPage.module.scss';

function ErrorPage({ imageWrapperClass, image, info }) {
  return (
    <>
      <Header />
      <main>
        <div className={styles.wrapper}>
          <div className={imageWrapperClass}>
            <Image
              src={image.source}
              width={image.width}
              height={image.height}
              alt={image.alt}
              priority
            />
          </div>
          <div className={styles.info}>
            <div className={styles.text}>
              <h1 className={styles.heading}>{info.heading}</h1>
              <p className={styles.description}>{info.text}</p>
            </div>
            <Button
              buttonTypeClass="AdditionalBorderColor"
              btnLink
              href={ROUTES.home}
            >
              Вернуться на главную
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}

ErrorPage.propTypes = {
  imageWrapperClass: PropTypes.string.isRequired,
  image: PropTypes.shape({
    source: PropTypes.objectOf(PropTypes.node).isRequired,
    alt: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
  info: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default ErrorPage;

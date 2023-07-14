import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Image from 'next/image';
import Header from '../Header/Header';
import Button from '../UI/Button/Button';
import ROUTES from '@/utils/constants/routes';
import styles from './ErrorPage.module.scss';

function ErrorPage({
  isServerComponent = false,
  imageWrapperClass,
  image,
  info,
}) {
  const router = useRouter();

  const generalWrapper = classNames(styles.wrapper, {
    [styles.wrapperServer]: isServerComponent,
  });

  const infoContent = classNames(styles.info, {
    [styles.infoServer]: isServerComponent,
  });

  const description = classNames(styles.description, {
    [styles.descriptionServer]: isServerComponent,
  });

  return (
    <>
      <Header />
      <main>
        <div className={generalWrapper}>
          <div className={imageWrapperClass}>
            <Image
              src={image.source}
              width={image.width}
              height={image.height}
              alt={image.alt}
              priority
            />
          </div>
          <div className={infoContent}>
            <div className={styles.text}>
              <h1 className={styles.heading}>{info.heading}</h1>
              <p className={description}>{info.text}</p>
            </div>
            <Button
              buttonTypeClass="AdditionalBorderColor"
              btnLink
              href={ROUTES.home}
              onClick={() => router.back()}
            >
              Вернуться на предыдущую страницу
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}

ErrorPage.propTypes = {
  isServerComponent: PropTypes.bool,
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

ErrorPage.defaultProps = {
  isServerComponent: false,
};

export default ErrorPage;

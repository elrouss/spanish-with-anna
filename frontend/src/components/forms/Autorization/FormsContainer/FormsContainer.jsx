import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import ROUTES from '../../../../utils/routes';
import styles from './FormsContainer.module.scss';
import IconLogo from '../../../../assets/icons/logo';

export default function FormsContainer({
  image,
  formParaphernaliaData,
  children,
}) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Link
            className={styles.logo}
            href={ROUTES.home}
            aria-label="Логотип, на домашнюю страницу"
          >
            <IconLogo />
          </Link>
          <div className={styles.linkContainer}>
            <p>{formParaphernaliaData.headerLinkExplanation}</p>
            <Link
              className={styles.headerLinkText}
              href={formParaphernaliaData.headerLinkHref}
              aria-label={formParaphernaliaData.headerLinkAriaLabel}
            >
              {formParaphernaliaData.headerLinkText}
            </Link>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.formParaphernalia}>
          <Image
            width={image.imageWidth}
            height={image.imageHeight}
            src={image.imageSrc}
            alt={formParaphernaliaData.imageAlt}
            priority
          />
          <p
            className={`${styles.paraphernaliaExplanation} ${
              styles[formParaphernaliaData.name]
            }`}
          >
            {formParaphernaliaData.explanation}
          </p>
        </div>
        <div className={styles.bush} />
        <div className={styles.form}>
          <h1 className={styles.heading}>{formParaphernaliaData.heading}</h1>
          <p className={styles.subheading}>
            {formParaphernaliaData.subheading}
          </p>
          {children}
          <p className={styles.politics}>
            {formParaphernaliaData.politics}{' '}
            <Link
              className={styles.politicsLink}
              href="/"
              aria-label="Политика конфиденциальности"
            >
              политика конфиденциальности
            </Link>
          </p>
          <p
            className={`${styles.paraphernaliaExplanation} ${
              styles[formParaphernaliaData.name]
            } ${styles.paraphernaliaExplanationInForm}`}
          >
            {formParaphernaliaData.explanation}
          </p>
        </div>
      </main>
    </>
  );
}

FormsContainer.propTypes = {
  children: PropTypes.element.isRequired,
  image: PropTypes.shape({
    imageWidth: PropTypes.number.isRequired,
    imageHeight: PropTypes.number.isRequired,
    imageSrc: PropTypes.shape({}).isRequired,
  }).isRequired,
  formParaphernaliaData: PropTypes.shape({
    headerLinkExplanation: PropTypes.string.isRequired,
    headerLinkText: PropTypes.string.isRequired,
    headerLinkHref: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    headerLinkAriaLabel: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    subheading: PropTypes.string.isRequired,
    politics: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    explanation: PropTypes.string.isRequired,
  }).isRequired,
};

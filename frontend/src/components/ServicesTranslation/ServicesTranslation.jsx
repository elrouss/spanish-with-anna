import Image from 'next/image';
import Button from '../Button/Button';
import styles from './ServicesTranslation.module.scss';
import translationIcon from '../../../public/assets/icons/translation.svg';

function ServicesTranslation() {
  return (
    <section className={styles.servicesTranslation}>
      <div className={styles.container}>
        <div className={styles.info}>
          <Image
            className={styles.translationIcon}
            width={window.matchMedia('(min-width: 768px)').matches ? 62 : 50}
            height={window.matchMedia('(min-width: 768px)').matches ? 53 : 42}
            src={translationIcon}
            alt="Перевести"
          />
          <h2 className={styles.title}>Нужно перевести?</h2>
          <p className={styles.description}>
            Вы&nbsp;всегда можете обратиться ко&nbsp;мне не&nbsp;только
            с&nbsp;целью освоить язык, но&nbsp;и&nbsp;перевести текст любой
            сложности (рус-исп или исп-рус). Я&nbsp;гарантирую вам
            профессионализм, высокую точность и&nbsp;скорость перевода.
          </p>
          <Button classSelector={styles.button} href="#">
            Заказать перевод
          </Button>
          <div className={styles.decorativeTile} />
        </div>
        <div className={styles.translationImage} />
      </div>
    </section>
  );
}

export default ServicesTranslation;

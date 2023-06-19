import Image from 'next/image';
import Button from '../Button/Button';
import styles from './ServicesTranslation.module.scss';
import translationIcon from '../../../public/assets/icons/translation.svg';
import translationImage from '../../../public/assets/images/translation-book.jpg';

function ServicesTranslation() {
  return (
    <section className={styles.servicesTranslation}>
      <div className={styles.container}>
        <div className={styles.info}>
          <Image
            className={styles.translationIcon}
            width={62}
            height={53}
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
        <Image
          className={styles.translationImage}
          width={676}
          height={584}
          src={translationImage}
          alt="Запись в тетрадь"
        />
      </div>
    </section>
  );
}

export default ServicesTranslation;
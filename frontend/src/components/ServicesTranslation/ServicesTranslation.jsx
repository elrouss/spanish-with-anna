import Image from 'next/image';
import styles from './ServicesTranslation.module.scss';
import Button from '../Button/Button';

function ServicesTranslation() {
  return (
    <section className={styles.servicesTranslation}>
      {/* <div className={styles.info}>
        <Image />
        <h2 className={styles.title}>Нужно перевести?</h2>
        <p className={styles.desctiption}>
          Вы&nbsp;всегда можете обратиться ко&nbsp;мне не&nbsp;только
          с&nbsp;целью освоить язык, но&nbsp;и&nbsp;перевести текст любой
          сложности (рус-исп или исп-рус). Я&nbsp;гарантирую вам
          профессионализм, высокую точность и&nbsp;скорость перевода.
        </p>
        <Button />
      </div>
      <Image /> */}
    </section>
  );
}

export default ServicesTranslation;

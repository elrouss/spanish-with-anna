import Image from 'next/image';
import Button from '../Button/Button';
import styles from './Intro.module.scss';
import headingLogo from '../../assets/images/intro-heading.svg';
import introImageMain from '../../assets/images/intro-image-main.png';

function Intro() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <p className={styles.subtitle}>
          Онлайн-уроки испанского легко и с удовольствием
        </p>
        <h1 className={styles.heading}>
          <Image
            className={styles.headingImage}
            lang="es"
            width={377}
            height={198}
            src={headingLogo}
            alt="Español con Anna"
          />
        </h1>
        <p className={styles.description}>
          Меня зовут Анна, я преподаватель, дипломированный переводчик и
          сертифицированный гид по Санкт-Петербургу на испанском языке. Я с
          радостью помогу вам максимально быстро и результативно овладеть
          языком, независимо от ваших целей, возраста и первоначального уровня.
        </p>
        <Button classSelector={styles.button} href="#">
          Начать учиться
        </Button>
      </div>
      <Image
        className={styles.photo}
        lang="es"
        width={626}
        height={609}
        src={introImageMain}
        alt="Фото Анны"
      />
    </section>
  );
}

export default Intro;

import Image from 'next/image';
import styles from './Intro.module.scss';
import headingLogo from '../../assets/images/intro-heading.svg';
// import introImageMain from '../../assets/images/intro-image-main.png';

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
          Меня зовут Анна, я&nbsp;преподаватель, дипломированный переводчик и
          сертифицированный гид по&nbsp;Санкт-Петербургу на&nbsp;испанском
          языке. Я&nbsp;с&nbsp;радостью помогу вам максимально быстро
          и&nbsp;результативно овладеть языком, независимо от&nbsp;ваших целей,
          возраста и&nbsp;первоначального уровня.
        </p>
        <a className={styles.button} href="#signup">
          Начать учиться
        </a>
      </div>
      <div className={styles.photo} />
      {/* <Image
        className={styles.photo}
        lang="es"
        width={626}
        height={605}
        src={introImageMain}
        alt="Улыбающаяся Анна с учебником испанского языка в руках на фоне Севильи и фразамии на испанском языке"
        priority
      /> */}
    </section>
  );
}

export default Intro;

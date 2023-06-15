import Image from 'next/image';
import imageRegistration from '../../assets/images/intro-image-course-registration.png';
import styles from './signup.module.scss';
import Button from '../Button/Button';
import IconArrowRegistration from '../../assets/icons/arrow-registration';
import IconGift from '../../assets/icons/gift';

export default function Signup() {
  return (
    <section className={styles.signup}>
      <div className={styles.mainContainer}>
        <Image
          className={styles.image}
          width={594}
          height={493}
          src={imageRegistration}
          alt="Анна предлагает зарегистрироваться"
        />
        <div className={styles.container}>
          <h2 className={styles.title}>как записаться на курс</h2>
          <div className={styles.subContainer}>
            <p className={styles.text}>
              Запись на&nbsp;любой курс доступна только
            </p>
            <span className={styles.text}>
              <span className={styles.selectedText}>зарегистрированным</span>
              пользователям.
            </span>
            <p className={styles.text}>
              Вы&nbsp;получите подборку лучших инструментов
              для&nbsp;изучения&nbsp;языка:
            </p>
            <ul className={styles.list}>
              <li className={styles.text}>
                проверенные словари, полезные приложения и&nbsp;учебники
              </li>
              <li className={styles.text}>
                интересные онлайн-ресурсы (испанские новостные
                и&nbsp;развлекательные YouTube каналы, фильмы, подкасты, юмор,
                сайты для изучения песен).
              </li>
            </ul>
          </div>
          <Button classSelector={`${styles.button} button`} href="/">
            Зарегистрироваться
          </Button>
        </div>
      </div>
      <div className={styles.bonus}>
        <p className={styles.iconText}>
          После регистрации вас ждет приятный бонус!
        </p>
        <div className={styles.iconGift}>
          <IconGift />
        </div>
        <div className={styles.arrow}>
          <IconArrowRegistration />
        </div>
      </div>
    </section>
  );
}

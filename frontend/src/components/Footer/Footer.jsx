import Link from 'next/link';

import styles from './footer.module.scss';
import IconLogo from '@/assets/icons/logo';
import IconYoutube from '@/assets/icons/youtube';
import IconTelegram from '@/assets/icons/telegram';
import FooterLink from '../FooterLink/FooterLink';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Link
            href="/"
            className={styles.logoLink}
            aria-label="Логотип, ведущий на домашнюю страницу"
          >
            <IconLogo />
          </Link>
          <ul className={styles.listLink}>
            <FooterLink href="/#">Курсы</FooterLink>
            <FooterLink href="/#">Обо мне</FooterLink>
            <FooterLink href="/#">Услуги перевода</FooterLink>
          </ul>
          <ul className={styles.listLink}>
            <FooterLink href="/#">Задать вопрос</FooterLink>
            <FooterLink href="/#">Права собственности</FooterLink>
            <FooterLink href="/#">Политика конфиденциальность</FooterLink>
          </ul>
          <div className={styles.contacts}>
            <ul className={styles.listIcon}>
              <li className={styles.icon}>
                <Link
                  target="_blank"
                  href="https://www.youtube.com/@anna_spanish"
                  className={styles.iconLink}
                  aria-label="иконка, ведущий на ютуб канал"
                >
                  <IconYoutube alt="ютуб-канал" styles={styles.iconLink} />
                </Link>
              </li>
              <li className={styles.icon}>
                <Link
                  target="_blank"
                  href="https://t.me/AnnaBelyaeva_spb"
                  className={styles.iconLink}
                  aria-label="иконка, ведущий на телеграм аккаунт"
                >
                  <IconTelegram alt="телеграм-канал" />
                </Link>
              </li>
            </ul>
            <Link href="/#" className={styles.email}>
              anyadobkes@gmail.com
            </Link>
          </div>
        </div>
        <p className={styles.copyright}>
          ©&#160;{new Date().getFullYear()}&#160;DesignGroup
        </p>
      </div>
    </footer>
  );
}

export default Footer;

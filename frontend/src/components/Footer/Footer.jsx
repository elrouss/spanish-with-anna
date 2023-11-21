import PropTypes from 'prop-types';
import Link from 'next/link';

import FooterLink from './FooterLink/FooterLink';

import IconLogo from '@/assets/icons/logo';
import IconYoutube from '@/assets/icons/youtube';
import IconTelegram from '@/assets/icons/telegram';

import styles from './Footer.module.scss';

function Footer({ onModalOpen }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.links}>
            <Link
              className={styles.logoLink}
              href="/"
              aria-label="Логотип, ведущий на домашнюю страницу"
            >
              <IconLogo />
            </Link>
            <ul className={styles.listLinksLeft}>
              <FooterLink href="/#">Курсы</FooterLink>
              <FooterLink href="/#">Обо мне</FooterLink>
              <FooterLink href="/#">Услуги перевода</FooterLink>
            </ul>
            <ul className={styles.listLinksCenter}>
              <button
                className={styles.link}
                type="button"
                onClick={onModalOpen}
              >
                Задать вопрос
              </button>
              <FooterLink href="/#">Права собственности</FooterLink>
              <FooterLink href="/#">Политика конфиденциальности</FooterLink>
            </ul>
            <div className={styles.contacts}>
              <ul className={styles.listIcons}>
                <li className={styles.icon}>
                  <Link
                    className={styles.iconLink}
                    href="https://www.youtube.com/@anna_spanish"
                    target="_blank"
                    aria-label="Аккаунт Анны на YouTube"
                  >
                    <IconYoutube styles={styles.iconLink} />
                  </Link>
                </li>
                <li className={styles.icon}>
                  <Link
                    className={styles.iconLink}
                    href="https://t.me/AnnaBelyaeva_spb"
                    target="_blank"
                    aria-label="Аккаунт Анны в Telegram"
                  >
                    <IconTelegram />
                  </Link>
                </li>
              </ul>
              <Link
                className={styles.email}
                href="mailto:anyadobkes@gmail.com"
                aria-label="Написать на электронный адрес Анны"
                lang="en"
              >
                anyadobkes@gmail.com
              </Link>
            </div>
          </div>
          <span className={styles.copyright} lang="en">
            &copy;&nbsp;{new Date().getFullYear()}&nbsp;DesignGroup
          </span>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  onModalOpen: PropTypes.func.isRequired,
};

export default Footer;

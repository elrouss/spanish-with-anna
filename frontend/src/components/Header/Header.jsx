import Link from 'next/link';
import styles from '../../styles/components/header.module.scss';
import IconLogo from '../../assets/icons/logo';
import IconArrowDown from '../../assets/icons/arrow-down';
import Button from '../Button/Button';
import { manrope } from '@/assets/fonts/fonts';

export default function Header() {
  return (
    <header className={`${styles.header} ${manrope.className}`}>
      <div className={styles.container}>
        <Link className={styles.logo} href="/">
          <IconLogo />
        </Link>
        <nav className={styles.navigation}>
          <ul className={styles.navigationMenu}>
            <li className="">
              <button className={styles.dropDownMenuButton} type="button">
                <span className={styles.navigationLink}>Онлайн-курсы</span>
                <IconArrowDown />
              </button>
            </li>
            <li className="">
              <Link className={styles.navigationLink} href="/">
                Услуги перевода
              </Link>
            </li>
            <li className="">
              <Link className={styles.navigationLink} href="/">
                Обо мне
              </Link>
            </li>
          </ul>
          <ul className={styles.navigationAuth}>
            <li className="">
              <Link className={styles.navigationLink} href="/">
                Регистрация
              </Link>
            </li>
            <li className="">
              <Button
                classSelector={`button-promo ${manrope.className}`}
                href="/"
              >
                Вход
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

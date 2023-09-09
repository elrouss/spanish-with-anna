import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import IconLogo from '../../assets/icons/logo';
import IconArrowDown from '../../assets/icons/arrow-down';
import ROUTES from '../../utils/routes';
import Button from '../Button/Button';
import { manrope } from '@/assets/fonts/fonts';

export default function Header() {
  const [isDropDownMenuOpen, setIsDropDownMenuOpen] = useState(false);

  function handleMenuClick() {
    setIsDropDownMenuOpen(!isDropDownMenuOpen);
  }

  function handleStopPropagation(evt) {
    evt.stopPropagation();
  }

  useEffect(() => {
    function closeMenu() {
      setIsDropDownMenuOpen(false);
    }

    document.addEventListener('click', closeMenu);

    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, []);

  return (
    <header className={`${styles.header} ${manrope.className}`}>
      <div className={styles.overlay} />
      <div className={styles.container}>
        <Link
          className={styles.logo}
          href="/"
          aria-label="Логотип, на домашнюю страницу"
        >
          <IconLogo />
        </Link>
        <nav className={styles.navigation}>
          <ul className={styles.navigationMenu}>
            <li
              className={styles.dropDownMenu}
              onClick={handleStopPropagation}
              onKeyDown={() => {}}
              role="menuitem"
            >
              <button
                className={styles.dropDownMenuButton}
                type="button"
                onClick={handleMenuClick}
                aria-label="Меню курсов"
              >
                <span className={styles.navigationText}>Онлайн-курсы</span>
                <IconArrowDown />
              </button>
              <ul
                className={`${styles.dropDownMenuContainer}${
                  isDropDownMenuOpen
                    ? ` ${styles.dropDownMenuContainerActive}`
                    : ''
                }`}
              >
                <li>
                  <Link className={styles.dropDownMenuNavigationLink} href="/">
                    Занятия в группах
                  </Link>
                </li>
                <li>
                  <Link className={styles.dropDownMenuNavigationLink} href="/">
                    Самостоятельное обучение
                  </Link>
                </li>
                <li>
                  <Link className={styles.dropDownMenuNavigationLink} href="/">
                    Персональное обучение
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className={styles.navigationLink} href="/">
                Услуги перевода
              </Link>
            </li>
            <li>
              <Link className={styles.navigationLink} href="/">
                Обо мне
              </Link>
            </li>
          </ul>
          <ul className={styles.navigationAuth}>
            <li>
              <Link className={styles.navigationLink} href={ROUTES.signup}>
                Регистрация
              </Link>
            </li>
            <li>
              <Button
                classSelector={`button-promo ${manrope.className}`}
                href={ROUTES.signin}
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

import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from '../../styles/components/header.module.scss';
import IconLogo from '../../assets/icons/logo';
import IconArrowDown from '../../assets/icons/arrow-down';
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
      <div className={styles.container}>
        <Link
          className={styles.logo}
          href="/"
          aria-label="Логотип, на домашнюю страницу"
        >
          <IconLogo />
        </Link>
        <nav className={styles.navigation}>
          <ul
            role="menu"
            className={styles.navigationMenu}
            onClick={handleStopPropagation}
            onKeyDown={() => {}}
          >
            <li className={styles.dropDownMenu}>
              <button
                className={styles.dropDownMenuButton}
                type="button"
                onClick={handleMenuClick}
                id="drop-button"
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
                id="dropDownMenuStyle"
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
              <Link className={styles.navigationLink} href="/">
                Регистрация
              </Link>
            </li>
            <li>
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

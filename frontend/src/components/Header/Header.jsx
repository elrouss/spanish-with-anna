import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from '../../styles/components/header.module.scss';
import IconLogo from '../../assets/icons/logo';
import IconArrowDown from '../../assets/icons/arrow-down';
import Button from '../Button/Button';
import { manrope } from '@/assets/fonts/fonts';

export default function Header() {
  const [dropDownMenuIsOpen, setDropDownMenuIsOpen] = useState(false);
  // Выкинуть или спрятать выпадающее меню в зависимости от стейта.
  useEffect(() => {
    const dropDownMenuStyle =
      document.querySelector('#dropDownMenuStyle').style;
    if (dropDownMenuIsOpen) {
      dropDownMenuStyle.visibility = 'visible';
      dropDownMenuStyle.opacity = 1;
      dropDownMenuStyle.top = '60px';
      dropDownMenuStyle.gap = '14px';
      dropDownMenuStyle.padding = '16px';
      dropDownMenuStyle.left = '-26px';
    } else {
      dropDownMenuStyle.visibility = 'hidden';
      dropDownMenuStyle.opacity = 0;
      dropDownMenuStyle.top = '20px';
      dropDownMenuStyle.gap = '0';
      dropDownMenuStyle.padding = '0';
      dropDownMenuStyle.left = '-10px';
    }
  }, [dropDownMenuIsOpen]);
  // Тоггл стейта при клике на кнопку.
  function handleMenuClick() {
    // eslint-disable-next-line no-unused-expressions
    dropDownMenuIsOpen
      ? setDropDownMenuIsOpen(false)
      : setDropDownMenuIsOpen(true);
  }
  // Задать стейту false? чтобы спрятать выпадающее меню при клике не на кнопку.
  useEffect(() => {
    document.addEventListener('click', (evt) => {
      if (
        // Условие клика не на кнопку выглядит коряво. Хочу более элегантное, но пока не придумал.
        (evt.target.id ? !(evt.target.id === 'drop-button') : true) &&
        (!evt.target.parentElement ||
          (evt.target.parentElement.id
            ? !(evt.target.parentElement.id === 'drop-button')
            : true))
      ) {
        setDropDownMenuIsOpen(false);
      }
    });
  }, []);
  return (
    <header className={`${styles.header} ${manrope.className}`}>
      <div className={styles.container}>
        <Link className={styles.logo} href="/">
          <IconLogo />
        </Link>
        <nav className={styles.navigation}>
          <ul className={styles.navigationMenu}>
            <li className={styles.dropDownMenu}>
              <button
                className={styles.dropDownMenuButton}
                type="button"
                onClick={handleMenuClick}
                id="drop-button"
              >
                <span className={styles.navigationText}>Онлайн-курсы</span>
                <IconArrowDown />
              </button>
              <ul
                className={styles.dropDownMenuContainer}
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

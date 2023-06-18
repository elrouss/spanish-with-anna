import Link from 'next/link';
import PropTypes from 'prop-types';

import styles from './FooterLink.module.scss';

function FooterLink({ children, href }) {
  return (
    <li className={styles.item}>
      <Link className={styles.link} href={href}>
        {children}
      </Link>
    </li>
  );
}

FooterLink.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default FooterLink;

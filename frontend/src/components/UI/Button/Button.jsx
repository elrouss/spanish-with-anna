import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './Button.module.scss';

function Button({
  children,
  classSelector = 'button',
  extraClassSelector,
  type = 'button',
  ariaLabel,
  disabled = false,
  btnLink = false,
  href = '#',
  onClick,
  isLoading = false,
  isLoadingText,
}) {
  return btnLink ? (
    <Link className={classSelector} href={href}>
      {children}
    </Link>
  ) : (
    <button
      className={`${styles[classSelector]}${
        extraClassSelector ? ` ${extraClassSelector}` : ''
      }`}
      // eslint-disable-next-line react/button-has-type
      type={type}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={onClick}
    >
      {!isLoading ? (
        children
      ) : (
        <span>
          {isLoadingText} <span className={styles.dotTyping} />
        </span>
      )}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  classSelector: PropTypes.oneOf([
    'button',
    'button-promo',
    'button-additional',
    'button-close',
  ]),
  extraClassSelector: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset', 'menu']),
  ariaLabel: PropTypes.string,
  disabled: PropTypes.bool,
  btnLink: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
  isLoadingText: PropTypes.string,
};

Button.defaultProps = {
  children: undefined,
  classSelector: 'button',
  extraClassSelector: undefined,
  type: 'button',
  ariaLabel: undefined,
  disabled: false,
  btnLink: false,
  href: '#',
  onClick: undefined,
  isLoading: false,
  isLoadingText: undefined,
};

export default Button;
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './Button.module.scss';

function Button({
  children,
  buttonTypeClass = '',
  type = 'button',
  ariaLabel,
  disabled = false,
  btnLink = false,
  href = '#',
  onClick,
  isLoading = false,
  isLoadingText,
}) {
  const buttonClass = classNames({
    [`${styles[`button${buttonTypeClass}`]}`]: true,
  });

  return btnLink ? (
    <Link className={buttonClass} href={href}>
      {children}
    </Link>
  ) : (
    <button
      className={buttonClass}
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
  buttonTypeClass: PropTypes.oneOf([
    '',
    'Promo',
    'Additional',
    'AdditionalBorderColor',
    'Close',
  ]),
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
  buttonTypeClass: '',
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

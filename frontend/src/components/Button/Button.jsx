import PropTypes from 'prop-types';

import Link from 'next/link';

function Button({ children, classSelector, href }) {
  return (
    <Link className={classSelector} href={href}>
      {children}
    </Link>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  classSelector: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default Button;

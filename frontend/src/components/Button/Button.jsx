import PropTypes from 'prop-types';

import Link from 'next/link';

// TODO: Next.js fonts are not applied to buttons.
// Because they should be added in specific way?
// Find a solution or install fonts locally

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

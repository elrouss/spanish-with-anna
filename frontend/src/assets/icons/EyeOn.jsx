import PropTypes from 'prop-types';

function EyeOn({ iconClass }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <path
        className={iconClass}
        stroke="#323232"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z"
      />
      <path
        className={iconClass}
        stroke="#323232"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      />
    </svg>
  );
}

EyeOn.propTypes = {
  iconClass: PropTypes.string.isRequired,
};

export default EyeOn;

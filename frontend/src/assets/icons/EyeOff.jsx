import PropTypes from 'prop-types';

function EyeOff({ iconClass }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <g
        className={iconClass}
        stroke="#323232"
        strokeLinecap="round"
        strokeLinejoin="round"
        clipPath="url(#a)"
      >
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.494 18.494 0 0 1-2.16 3.19m-6.72-1.07a2.998 2.998 0 0 1-5.194-2.098A3 3 0 0 1 9.88 9.88M1 1l22 22" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

EyeOff.propTypes = {
  iconClass: PropTypes.string.isRequired,
};

export default EyeOff;

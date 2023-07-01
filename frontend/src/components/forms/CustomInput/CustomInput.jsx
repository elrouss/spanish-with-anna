import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
import styles from './CustomInput.module.scss';
import EyeOff from '../../../assets/icons/EyeOff';
import EyeOn from '../../../assets/icons/EyeOn';

function CustomInput({ formik, name, type, placeholder }) {
  const { errors, touched } = formik;
  const [isEyeOn, setIsEyeOn] = useState(false);
  const inputRef = useRef(null);
  const isPassword = type === 'password';

  function handleEye() {
    inputRef.current.type = isEyeOn ? 'password' : 'text';
    setIsEyeOn(!isEyeOn);
    inputRef.current.focus();
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <input
          className={`${styles.input} ${
            errors[name] && touched[name] ? styles.inputError : ''
          }`}
          id={name}
          ref={inputRef}
          type={type}
          name={name}
          {...formik.getFieldProps({ name })}
          placeholder={placeholder}
        />
        {isPassword && (
          <button
            className={styles.buttonEye}
            type="button"
            aria-label={isEyeOn ? 'Скрыть пароль' : 'Посмотреть пароль'}
            onClick={handleEye}
          >
            {isEyeOn ? (
              <EyeOn iconClass={styles.icon} />
            ) : (
              <EyeOff iconClass={styles.icon} />
            )}
          </button>
        )}
      </div>
      <span className={styles.error}>
        {errors[name] && touched[name] ? errors[name] : ''}
      </span>
    </div>
  );
}

CustomInput.propTypes = {
  formik: PropTypes.shape({
    getFieldProps: PropTypes.func.isRequired,
    errors: PropTypes.shape({}).isRequired,
    touched: PropTypes.shape({}).isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default CustomInput;

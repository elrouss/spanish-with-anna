import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';
import styles from './CustomField.module.scss';
import EyeOff from '../../../assets/icons/EyeOff';
import EyeOn from '../../../assets/icons/EyeOn';

function CustomField({ formik, name, type, placeholder }) {
  const { errors, touched } = formik;
  const [isPassword, setIsPassword] = useState(false);
  const [isEyeOn, setIsEyeOn] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (type === 'password') {
      setIsPassword(true);
    }
  }, []);

  function handleEye() {
    inputRef.current.type = isEyeOn ? 'password' : 'text';
    setIsEyeOn(!isEyeOn);
    inputRef.current.focus();
  }

  return (
    <div>
      <div className={styles.container}>
        <input
          className={`${styles.input} ${
            errors[name] && touched[name] ? styles.inputError : ''
          }`}
          id={name}
          type={type}
          name={name}
          {...formik.getFieldProps({ name })}
          placeholder={placeholder}
          ref={inputRef}
        />
        {isPassword && (
          <button
            className={styles.buttonEye}
            type="button"
            aria-label="Посмотреть пароль"
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
      {/* <EyeOn iconClass={styles.icon} /> */}
    </div>
  );
}

CustomField.propTypes = {
  formik: PropTypes.shape({
    getFieldProps: PropTypes.func.isRequired,
    errors: PropTypes.shape({}).isRequired,
    touched: PropTypes.shape({}).isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default CustomField;

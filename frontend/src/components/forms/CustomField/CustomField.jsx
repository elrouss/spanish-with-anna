import PropTypes from 'prop-types';
import styles from './CustomField.module.scss';

function CustomField({ formik, name, type, placeholder }) {
  const { errors, touched } = formik;
  return (
    <div>
      <input
        className={`${styles.input} ${
          errors[name] && touched[name] ? styles.inputError : ''
        }`}
        id={name}
        type={type}
        name={name}
        {...formik.getFieldProps({ name })}
        placeholder={placeholder}
      />
      <span className={styles.error}>
        {errors[name] && touched[name] ? errors[name] : ''}
      </span>
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

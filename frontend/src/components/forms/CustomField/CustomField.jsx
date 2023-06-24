import PropTypes from 'prop-types';
import styles from './CustomField.module.scss';

function CustomField({ formik, name, parentName, placeholder }) {
  const { errors, touched } = formik;
  return (
    <div>
      <input
        className={`${styles.input} ${
          errors[name] && touched[name] ? styles.inputError : ''
        }`}
        type={name}
        id={`${parentName}-${name}`}
        name={name}
        {...formik.getFieldProps({ name })}
        placeholder={placeholder}
      />
      <div className={styles.error}>
        {errors[name] && touched[name] ? errors[name] : ''}
      </div>
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
  parentName: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default CustomField;

import PropTypes from 'prop-types';
import styles from './Radio.module.scss';

function Radio({ id, name, value, formik, label = '', checked = false }) {
  return (
    <div className={styles.radio}>
      <input
        className={styles.input}
        id={id}
        name={name}
        type="radio"
        value={value}
        defaultChecked={checked}
        onChange={formik.getFieldProps({ name }).onChange}
      />
      <label className={styles.label} htmlFor={id}>
        {label && label}
      </label>
    </div>
  );
}

Radio.propTypes = {
  formik: PropTypes.shape({
    getFieldProps: PropTypes.func.isRequired,
    errors: PropTypes.shape({}).isRequired,
    touched: PropTypes.shape({}).isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  checked: PropTypes.bool,
};

Radio.defaultProps = {
  label: '',
  checked: false,
};

export default Radio;

import PropTypes from 'prop-types';
import styles from './Checkbox.module.scss';

function Checkbox({ id, name, value, formik, label = '', checked = false }) {
  return (
    <div className={styles.checkbox}>
      <input
        className={styles.input}
        id={id}
        type="checkbox"
        name={name}
        {...formik.getFieldProps({ name })}
        value={value}
        defaultChecked={checked}
      />
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

Checkbox.propTypes = {
  formik: PropTypes.shape({
    getFieldProps: PropTypes.func.isRequired,
    errors: PropTypes.shape({}).isRequired,
    touched: PropTypes.shape({}).isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.bool,
};

Checkbox.defaultProps = {
  value: undefined,
  label: '',
  checked: false,
};

export default Checkbox;

import PropTypes from 'prop-types';
import styles from './Textarea.module.scss';

function Textarea({
  id,
  name,
  form,
  placeholder,
  formik,
  autocomplete = 'off',
  disabled = false,
}) {
  return (
    <textarea
      className={styles.textarea}
      id={id}
      name={name}
      form={form}
      placeholder={placeholder}
      autoComplete={autocomplete}
      disabled={disabled}
      {...formik.getFieldProps({ name })}
    />
  );
}

Textarea.propTypes = {
  formik: PropTypes.shape({
    getFieldProps: PropTypes.func.isRequired,
    errors: PropTypes.shape({}).isRequired,
    touched: PropTypes.shape({}).isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  autocomplete: PropTypes.oneOf(['on', 'off']),
  form: PropTypes.string,
  disabled: PropTypes.bool,
};

Textarea.defaultProps = {
  placeholder: undefined,
  autocomplete: 'off',
  form: undefined,
  disabled: false,
};

export default Textarea;

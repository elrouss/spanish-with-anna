import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './LoginForm.module.scss';
import { schemaEmail, schemaPassword } from '../yapSchemas/yapSchemas';
import CustomInput from '../CustomInput/CustomInput';

function LoginForm() {
  const formikLogin = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: Yup.object(schemaEmail(Yup)).shape(schemaPassword(Yup)),

    onSubmit: (values, { setSubmitting }) => {
      console.log(values);
      setSubmitting(false);
    },
  });

  return (
    <form
      onSubmit={formikLogin.handleSubmit}
      className={styles.form}
      noValidate
    >
      <CustomInput
        formik={formikLogin}
        name="email"
        type="email"
        placeholder="email"
      />
      <CustomInput
        formik={formikLogin}
        name="password"
        type="password"
        placeholder="password"
      />
      <button
        type="submit"
        className={`button ${
          Object.keys(formikLogin.errors).length ? styles.buttonDisable : ''
        }`}
      >
        Войти
      </button>
    </form>
  );
}
export default LoginForm;

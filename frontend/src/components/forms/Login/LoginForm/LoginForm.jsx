import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './LoginForm.module.scss';
import {
  schemaEmail,
  schemaPassword,
} from '../../../../utils/validation/yupSchemas';
import Input from '../../../UI/Input/Input';
import Button from '../../../UI/Button/Button';

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
      <Input
        formik={formikLogin}
        name="email"
        type="email"
        placeholder="Электронная почта"
      />
      <Input
        formik={formikLogin}
        name="password"
        type="password"
        placeholder="Пароль"
      />
      <Button
        type="submit"
        disabled={Boolean(Object.keys(formikLogin.errors).length)}
      >
        Войти
      </Button>
    </form>
  );
}
export default LoginForm;

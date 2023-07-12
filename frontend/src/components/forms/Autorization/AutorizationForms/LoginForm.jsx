import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './Forms.module.scss';
import {
  schemaEmail,
  schemaPassword,
  schemaRememberMe,
} from '../../../../utils/validation/yupSchemas';
import Input from '../../../UI/Input/Input';
import Button from '../../../UI/Button/Button';
import Checkbox from '../../../UI/Checkbox/Checkbox';

function LoginForm() {
  const formikLogin = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: Yup.object(schemaEmail(Yup))
      .shape(schemaPassword(Yup))
      .shape(schemaRememberMe(Yup)),

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
      <div className={styles.inputQueries}>
        <Checkbox
          id="login-remember-me"
          name="rememberMe"
          formik={formikLogin}
          value=""
          label="Запомнить меня"
        />
        <button
          className={styles.forgottenPasswordButton}
          type="button"
          aria-label="Забыли пароль?"
        >
          Забыли пароль?
        </button>
      </div>
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

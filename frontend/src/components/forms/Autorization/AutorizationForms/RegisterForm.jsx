import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './Forms.module.scss';
import {
  schemaEmail,
  schemaPassword,
  schemaName,
} from '../../../../utils/validation/yupSchemas';
import Input from '../../../UI/Input/Input';
import Button from '../../../UI/Button/Button';
import { signupData } from '../../../../utils/data/authorization';

function RegisterForm() {
  const formikRegister = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },

    validationSchema: Yup.object(schemaEmail(Yup))
      .shape(schemaPassword(Yup))
      .shape(schemaName(Yup)),

    onSubmit: (values, { setSubmitting }) => {
      console.log(values);
      setSubmitting(false);
    },
  });

  return (
    <form
      onSubmit={formikRegister.handleSubmit}
      className={styles.form}
      noValidate
    >
      <Input
        formik={formikRegister}
        name="name"
        type="text"
        placeholder="Имя"
      />
      <Input
        formik={formikRegister}
        name="email"
        type="email"
        placeholder="Электронная почта"
      />
      <Input
        formik={formikRegister}
        name="password"
        type="password"
        placeholder="Пароль"
        hintText={signupData.passwordHint}
      />
      <Button
        type="submit"
        disabled={Boolean(Object.keys(formikRegister.errors).length)}
      >
        Создать
      </Button>
    </form>
  );
}
export default RegisterForm;

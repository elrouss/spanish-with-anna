import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './NameTestForm.module.scss';
import { schemaNameTest } from '../yapSchemas/yapSchemas';
import CustomField from '../CustomField/CustomField';

function NameTestForm() {
  const formik = useFormik({
    initialValues: {
      email: '',
    },

    validationSchema: Yup.object(schemaNameTest(Yup)),

    onSubmit: (values, { setSubmitting }) => {
      console.log(formik);
      console.log(values);
      setSubmitting(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.Formik} noValidate>
      <CustomField
        formik={formik}
        name="email"
        type="email"
        placeholder="email"
      />
      <button
        type="submit"
        className={`button ${
          Object.keys(formik.errors).length ? styles.buttonDisable : ''
        }`}
      >
        Test
      </button>
    </form>
  );
}
export default NameTestForm;

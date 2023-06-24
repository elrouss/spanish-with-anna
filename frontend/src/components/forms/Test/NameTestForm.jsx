import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './NameTestForm.module.scss';
import { schemaNameTest } from '../yapSchemas/yapSchemas';
import CustomField from '../CustomField/CustomField';

function NameTestForm() {
  const formik = useFormik({
    initialValues: {
      name: '',
    },

    validationSchema: Yup.object(schemaNameTest(Yup)),

    onSubmit: (values, { setSubmitting }) => {
      console.log(values);
      setSubmitting(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.Formik} noValidate>
      <CustomField
        formik={formik}
        name="name"
        parentName="test-form"
        placeholder="Имя"
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

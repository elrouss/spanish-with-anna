import { useState } from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  schemaEmail,
  schemaName,
  schemaPhoneFeedback,
  schemaPreferredCommunication,
  schemaMessageFeedback,
  schemaPersonalDataConsent,
} from '../../../../utils/validation/yupSchemas';
import CustomInput from '../../CustomInput/CustomInput';
import Radio from '@/components/UI/Radio/Radio';
import Textarea from '@/components/UI/Textarea/Textarea';
import Checkbox from '@/components/UI/Checkbox/Checkbox';
import Button from '@/components/UI/Button/Button';
import { sendFeedback } from '@/utils/api/api';
import filterFormValues from '@/utils/validation/auxiliary-functions';
import styles from './Request.module.scss';

function Request({ onSuccess }) {
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      preferred_communication: 'email',
      message: '',
      is_agree: true,
    },

    validationSchema: Yup.object()
      .shape(schemaName(Yup))
      .shape(schemaEmail(Yup))
      .shape(schemaPhoneFeedback(Yup))
      .shape(schemaPreferredCommunication(Yup))
      .shape(schemaMessageFeedback(Yup))
      .shape(schemaPersonalDataConsent(Yup)),

    onSubmit: (values, { resetForm, setSubmitting }) => {
      const filterData = filterFormValues(values);

      sendFeedback(
        filterData,
        setIsLoading,
        setSubmitting,
        onSuccess,
        resetForm
      );
    },
  });

  return (
    <form className={styles.form} noValidate onSubmit={formik.handleSubmit}>
      <div className={styles.intro}>
        <h3>Обратная связь</h3>
        <p className={styles.subheading}>
          Оставьте свои контактные данные, и я помогу вам подобрать подходящий
          формат изучения языка
        </p>
      </div>
      <div className={styles.inputs}>
        <CustomInput
          name="name"
          type="text"
          placeholder="Имя *"
          formik={formik}
        />
        <CustomInput
          name="email"
          type="email"
          placeholder="Электронная почта *"
          formik={formik}
        />
        <CustomInput
          name="phone"
          type="tel"
          placeholder="Телефон"
          formik={formik}
        />
      </div>
      <div className={styles.contact}>
        <span>Предпочитаемый вид связи</span>
        <Radio
          id="feedback-phone"
          label="Телефон"
          name="preferred_communication"
          value="phone"
          formik={formik}
        />
        <Radio
          id="feedback-email"
          label="Email"
          name="preferred_communication"
          value="email"
          checked
          formik={formik}
        />
      </div>
      <Textarea
        id="feedback-message"
        name="message"
        placeholder="Напишите свой вопрос или комментарий"
        formik={formik}
      />
      <div className={styles.personalData}>
        <Checkbox
          id="feedback-personal-data-consent"
          name="is_agree"
          checked
          formik={formik}
        />
        <p className={styles.consent}>
          Согласие на обработку персональных данных на условиях{' '}
          <span className={styles.accent}> политики конфиденциальности</span>
        </p>
      </div>
      <Button
        type="submit"
        disabled={
          !formik.isValid ||
          formik.isSubmitting ||
          (!Object.keys(formik.touched).length &&
            formik.touched.constructor === Object)
        }
        isLoading={isLoading}
        isLoadingText="Отправляется"
      >
        Отправить
      </Button>
    </form>
  );
}

Request.propTypes = {
  onSuccess: PropTypes.func.isRequired,
};

export default Request;

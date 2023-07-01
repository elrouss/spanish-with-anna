import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  schemaEmail,
  schemaName,
  schemaPhone,
  schemaPreferredCommunication,
  schemaFeedbackMessage,
  schemaPersonalDataConsent,
} from '../../../../utils/validation/yupSchemas';
import CustomInput from '../../CustomInput/CustomInput';
import CustomRadio from '../../CustomRadio/CustomRadio';
import CustomTextarea from '../../CustomTextarea/CustomTextarea';
import CustomCheckbox from '../../CustomCheckbox/CustomCheckbox';
import imageSuccess from '../../../../../public/assets/images/feedback-success.svg';
import styles from './Request.module.scss';

function Request({ isModalOpened, onModalClose }) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      preferredCommunication: 'email',
      message: '',
      personalDataConsent: true,
    },

    validationSchema: Yup.object()
      .shape(schemaName(Yup))
      .shape(schemaEmail(Yup))
      .shape(schemaPhone(Yup))
      .shape(schemaPreferredCommunication(Yup))
      .shape(schemaFeedbackMessage(Yup))
      .shape(schemaPersonalDataConsent(Yup)),

    onSubmit: (values, { resetForm }) => {
      setIsSuccess(true);
      resetForm();
    },
  });

  useEffect(() => {
    if (isSuccess && !isModalOpened) setIsSuccess(false);
  }, [isSuccess, isModalOpened]);

  return !isSuccess ? (
    <form className={styles.form} noValidate onSubmit={formik.handleSubmit}>
      <div className={styles.intro}>
        <h3 className={styles.heading}>Обратная связь</h3>
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
          placeholder="Телефон *"
          formik={formik}
        />
      </div>
      <div className={styles.contact}>
        <span>Предпочитаемый вид связи</span>
        <CustomRadio
          id="feedback-phone"
          label="Телефон"
          name="preferredCommunication"
          value="phone"
          formik={formik}
        />
        <CustomRadio
          id="feedback-email"
          label="Email"
          name="preferredCommunication"
          value="email"
          checked
          formik={formik}
        />
      </div>
      <CustomTextarea
        id="feedback-message"
        name="message"
        placeholder="Напишите свой вопрос или комментарий"
        formik={formik}
      />
      <div className={styles.personalData}>
        <CustomCheckbox
          id="feedback-personal-data-consent"
          name="personalDataConsent"
          checked
          formik={formik}
        />
        <p className={styles.consent}>
          Согласие на обработку персональных данных на условиях{' '}
          <span className={styles.accent}> политики конфиденциальности</span>
        </p>
      </div>
      <button
        className={`button ${styles.button}`}
        type="submit"
        disabled={
          !formik.isValid ||
          formik.isSubmitting ||
          (!Object.keys(formik.touched).length &&
            formik.touched.constructor === Object)
        }
      >
        {!isLoading ? (
          'Отправить'
        ) : (
          <span>
            Отправляется <span className={styles.dotTyping} />
          </span>
        )}
      </button>
    </form>
  ) : (
    <div className={styles.content}>
      <Image
        width={306}
        height={327}
        src={imageSuccess}
        alt="Успешная авторизация"
        priority
      />
      <div className={styles.text}>
        <h3 className={styles.heading}>Заявка принята</h3>
        <p className={styles.subheadingSuccess}>
          Я скоро свяжусь с вами, чтобы ответить на ваши вопросы
        </p>
      </div>
      <button
        className={`button ${styles.button}`}
        type="button"
        onClick={onModalClose}
      >
        Хорошо, я понял(а)
      </button>
    </div>
  );
}

Request.propTypes = {
  isModalOpened: PropTypes.bool.isRequired,
  onModalClose: PropTypes.func.isRequired,
};

export default Request;

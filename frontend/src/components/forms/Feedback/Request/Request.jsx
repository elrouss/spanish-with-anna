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
import Radio from '@/components/UI/Radio/Radio';
import Textarea from '@/components/UI/Textarea/Textarea';
import Checkbox from '../../../UI/Checkbox/Checkbox';
import Button from '@/components/UI/Button/Button';
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
      preferredCommunication: 'phone',
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
        <Radio
          id="feedback-phone"
          label="Телефон"
          name="preferredCommunication"
          value="phone"
          checked
          formik={formik}
        />
        <Radio
          id="feedback-email"
          label="Email"
          name="preferredCommunication"
          value="email"
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
          name="personalDataConsent"
          checked
          formik={formik}
        />
        <p className={styles.consent}>
          Согласие на обработку персональных данных на условиях{' '}
          <span className={styles.accent}> политики конфиденциальности</span>
        </p>
      </div>
      <Button
        extraClassSelector={styles.button}
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
      <Button extraClassSelector={styles.button} onClick={onModalClose}>
        Хорошо, я понял(а)
      </Button>
    </div>
  );
}

Request.propTypes = {
  isModalOpened: PropTypes.bool.isRequired,
  onModalClose: PropTypes.func.isRequired,
};

export default Request;

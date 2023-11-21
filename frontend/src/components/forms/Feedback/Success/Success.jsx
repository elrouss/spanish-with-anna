import PropTypes from 'prop-types';
import Image from 'next/image';
import Button from '@/components/UI/Button/Button';
import imageSuccess from '../../../../../public/assets/images/feedback-success.png';
import styles from './Success.module.scss';

function Success({ onModalClose }) {
  return (
    <div className={styles.content}>
      <Image
        width={306}
        height={327}
        src={imageSuccess}
        alt="Успешная авторизация"
        priority
      />
      <div className={styles.text}>
        <h3>Заявка принята</h3>
        <p className={styles.subheadingSuccess}>
          Я скоро свяжусь с вами, чтобы ответить на ваши вопросы
        </p>
      </div>
      <Button onClick={onModalClose}>Хорошо, я понял(а)</Button>
    </div>
  );
}

Success.propTypes = {
  onModalClose: PropTypes.func.isRequired,
};

export default Success;

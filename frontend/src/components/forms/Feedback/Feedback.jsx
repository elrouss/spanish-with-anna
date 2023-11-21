import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Request from './Request/Request';
import Success from './Success/Success';
import Button from '@/components/UI/Button/Button';
import styles from './Feedback.module.scss';

function Feedback({ isModalOpened, onModalClose }) {
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isSuccess && !isModalOpened) setIsSuccess(false);
  }, [isSuccess, isModalOpened]);

  return (
    <div className={styles.modal}>
      <div className={styles.wrapper}>
        {!isSuccess ? (
          <Request onSuccess={setIsSuccess} />
        ) : (
          <Success onModalClose={onModalClose} />
        )}
      </div>
      <Button
        buttonTypeClass="Close"
        ariaLabel="Закрыть модальное окно с формой обратной связи"
        onClick={onModalClose}
      />
    </div>
  );
}

Feedback.propTypes = {
  isModalOpened: PropTypes.bool.isRequired,
  onModalClose: PropTypes.func.isRequired,
};

export default Feedback;

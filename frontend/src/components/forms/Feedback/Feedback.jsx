import PropTypes from 'prop-types';
import Request from './Request/Request';
import styles from './Feedback.module.scss';

function Feedback({ onModalClose, ...rest }) {
  return (
    <div className={styles.modal}>
      <div className={styles.wrapper}>
        <Request onModalClose={onModalClose} {...rest} />
      </div>
      <button
        className={styles.closeButton}
        type="button"
        aria-label="Закрыть модальное окно с обратной связью"
        onClick={onModalClose}
      />
    </div>
  );
}

Feedback.propTypes = {
  onModalClose: PropTypes.func.isRequired,
};

export default Feedback;

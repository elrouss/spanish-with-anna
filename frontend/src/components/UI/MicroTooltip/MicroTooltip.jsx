import PropTypes from 'prop-types';
import styles from './MicroTooltip.module.scss';
import MicroTooltipIcon from '../../../assets/icons/MicroTooltipIcon';

function MicroTooltip({ text }) {
  return (
    <button
      className={styles.container}
      type="button"
      aria-label="Посмотреть подсказку к полю ввода пароля"
    >
      <div className={styles.subcontainer}>
        <p className={styles.text}>{text}</p>
      </div>
      <MicroTooltipIcon />
    </button>
  );
}

MicroTooltip.propTypes = {
  text: PropTypes.string.isRequired,
};

export default MicroTooltip;

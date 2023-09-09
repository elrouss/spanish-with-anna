import PropTypes from 'prop-types';
import styles from './MicroTooltip.module.scss';
import MicroTooltipIcon from '../../../assets/icons/MicroTooltipIcon';

function MicroTooltip({ text }) {
  return (
    <button type="button" className={styles.container}>
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

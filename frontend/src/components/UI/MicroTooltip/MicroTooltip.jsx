import PropTypes from 'prop-types';
import styles from './MicroTooltip.module.scss';
import MicroTooltipIcon from '../../../assets/icons/MicroTooltipIcon';

function MicroTooltip({ text }) {
  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <p className={styles.text}>{text}</p>
      </div>
      <MicroTooltipIcon />
    </div>
  );
}

MicroTooltip.propTypes = {
  text: PropTypes.string.isRequired,
};

export default MicroTooltip;

import PropTypes from 'prop-types';
import styles from './Facts.module.scss';

function Fact({ counter, description }) {
  return (
    <>
      <p className={styles.counter}>{counter}</p>
      <p className={styles.description}>{description}</p>
    </>
  );
}

Fact.propTypes = {
  counter: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Fact;

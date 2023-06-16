import { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

import styles from './CarouselButton.module.scss';

const CarouselButton = forwardRef(({ direction }, ref) => {
  const isPrevDirection = direction === 'previous';

  return (
    <button
      className={`${styles.button} ${
        (isPrevDirection && styles.buttonPrev) || styles.buttonNext
      }`}
      ref={ref}
      type="button"
      aria-label={
        isPrevDirection
          ? 'Переключение карусели назад'
          : 'Переключение карусели вперед'
      }
      onClick={() =>
        isPrevDirection ? ref.current.slidePrev() : ref.current.slideNext()
      }
    />
  );
});

CarouselButton.propTypes = {
  direction: PropTypes.string.isRequired,
};

export default memo(CarouselButton);

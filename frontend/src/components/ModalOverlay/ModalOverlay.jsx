import { useEffect } from 'react';
import PropTypes from 'prop-types';
import useCloseModal from '@/hooks/useCloseModal';
import WithPortal from '@/hocs/withPortal';
import styles from './ModalOverlay.module.scss';

function ModalOverlay({ children, id, isModalOpened, onModalClose }) {
  useEffect(() => {
    const { body } = document;

    return isModalOpened
      ? body.classList.add('page-no-scroll')
      : body.classList.remove('page-no-scroll');
  }, [isModalOpened]);

  useCloseModal(id, isModalOpened, onModalClose);

  return (
    <WithPortal>
      <div
        className={`${styles.overlay}${
          (isModalOpened && ` ${styles.opened}`) || ''
        }`}
        id={id}
      >
        {children}
      </div>
    </WithPortal>
  );
}

ModalOverlay.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  isModalOpened: PropTypes.bool.isRequired,
  onModalClose: PropTypes.func.isRequired,
};

export default ModalOverlay;

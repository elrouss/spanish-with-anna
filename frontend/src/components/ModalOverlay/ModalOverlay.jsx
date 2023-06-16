import { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import useCloseModal from '@/hooks/useCloseModal';

import styles from './ModalOverlay.module.scss';

function ModalOverlay({ children, id, isModalOpened, onModalClose }) {
  const modalRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    modalRef.current = document.querySelector('#modals');

    setMounted(true);
  }, []);

  useCloseModal(id, isModalOpened, onModalClose);

  return mounted && modalRef.current
    ? createPortal(
        <div
          className={`${styles.overlay}${
            (isModalOpened && ` ${styles.opened}`) || ''
          }`}
          id={id}
        >
          {children}
        </div>,
        modalRef.current
      )
    : null;
}

ModalOverlay.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  isModalOpened: PropTypes.bool.isRequired,
  onModalClose: PropTypes.func.isRequired,
};

export default ModalOverlay;

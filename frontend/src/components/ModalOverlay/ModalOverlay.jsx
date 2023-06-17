import { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import useCloseModal from '@/hooks/useCloseModal';

import styles from './ModalOverlay.module.scss';

function ModalOverlay({ children, id, isModalOpened, onModalClose }) {
  const modalRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    modalRef.current = document.querySelector('#modals');

    setIsMounted(true);
  }, []);

  useEffect(() => {
    const { body } = document;

    return isModalOpened
      ? body.classList.add('page-no-scroll')
      : body.classList.remove('page-no-scroll');
  }, [isModalOpened]);

  useCloseModal(id, isModalOpened, onModalClose);

  return isMounted && modalRef.current
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

import { useEffect } from 'react';

export default function useCloseModal(id, isOpened, handleClose) {
  useEffect(() => {
    if (!isOpened) return;

    const closeModal = (evt) => {
      if (evt?.target?.id === id || evt?.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('click', closeModal);
    document.addEventListener('keydown', closeModal);

    // eslint-disable-next-line consistent-return
    return () => {
      document.removeEventListener('click', closeModal);
      document.removeEventListener('keydown', closeModal);
    };
  }, [isOpened]);
}

import { useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import iconArrowDown from '../../../../public/assets/icons/arrow-down.svg';
import styles from './Question.module.scss';

function Question({ title, answer }) {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  function toggleAnswerVisibility() {
    setIsAnswerVisible(!isAnswerVisible);
  }

  function handleKeyDown(evt) {
    if (evt.key === 'Enter') {
      toggleAnswerVisibility();
    }
  }

  return (
    <>
      <div
        className={`${styles.accordionItemHead} ${
          isAnswerVisible ? styles.accordionItemHead_active : ''
        }`}
        tabIndex={0}
        role="button"
        onClick={toggleAnswerVisibility}
        onKeyDown={handleKeyDown}
      >
        <h3 className={styles.accordionItemTitle}>{title}</h3>
        <Image
          className={`${styles.arrowDown} ${
            isAnswerVisible ? styles.arrowUp : ''
          }`}
          src={iconArrowDown}
          width={23}
          height={13}
          alt="Показать ответ"
        />
      </div>
      <div
        className={`${styles.accordionItemContent} ${
          isAnswerVisible ? styles.accordionItemContent_active : ''
        }`}
      >
        {answer}
      </div>
    </>
  );
}

Question.propTypes = {
  title: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default Question;

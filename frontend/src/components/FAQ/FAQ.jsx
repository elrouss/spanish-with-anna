import styles from './FAQ.module.scss';
import FAQ_DATA from '@/utils/data/FAQ_DATA';
import Question from './Question';

function FAQ() {
  const questions = FAQ_DATA.map((q) => (
    <li className={styles.accordionItem} key={`accordionItem-${q._id}`}>
      <Question title={q.title} answer={q.answer} key={`question-${q._id}`} />
    </li>
  ));

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <h2 className={styles.title}>Частые вопросы</h2>
        <ul className={styles.accordion}>{questions}</ul>
        <div className={styles.ask}>
          <p className={styles.tip}>
            Остались вопросы? Я&nbsp;с&nbsp;удовольствием на них отвечу.
          </p>
          <button className={styles.askButton} type="button">
            Задать вопрос
          </button>
          <div className={styles.decorationQuestionIcon} />
        </div>
        <div className={styles.decorationTileLeft} />
      </div>
    </section>
  );
}

export default FAQ;

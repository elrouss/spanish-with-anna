import styles from './Facts.module.scss';
import FACTS from '../../utils/data/FACTS';
import Fact from './Fact/Fact';

function Facts() {
  const facts = FACTS.map((fact) => (
    <li className={styles.listItem} key={fact._id}>
      <Fact counter={fact.counter} description={fact.description} />
    </li>
  ));
  return (
    <section className={styles.facts} aria-label="Факты">
      <div className={styles.container}>
        <ul className={styles.list}>{facts}</ul>
      </div>
    </section>
  );
}

export default Facts;

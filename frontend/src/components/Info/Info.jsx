import styles from './Info.module.scss';
import InfoCard from './InfoCard';

function Info() {
  return (
    <section className={styles.info}>
      <h2 className={styles.title}>Информация по онлайн-курсам</h2>
      <ul className={styles.list}>
        <li />
      </ul>
      <div className={styles.decoration} />
    </section>
  );
}

export default Info;

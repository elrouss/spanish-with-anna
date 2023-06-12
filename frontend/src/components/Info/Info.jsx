import styles from './Info.module.scss';
import InfoCard from './InfoCard';
import INFO_CARDS from '@/utils/data/INFO_CARDS';

function Info() {
  const infoCards = INFO_CARDS.map((infoCard) => (
    <li className={styles.infoCardItem} key={infoCard._id}>
      <InfoCard
        title={infoCard.title}
        description={infoCard.description}
        image={infoCard.image}
        link={infoCard.link}
      />
    </li>
  ));
  return (
    <section className={styles.info}>
      <h2 className={styles.title}>Информация по онлайн-курсам</h2>
      <ul className={styles.list}>{infoCards}</ul>
      <div className={styles.decoration} />
    </section>
  );
}

export default Info;

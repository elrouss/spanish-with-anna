import styles from './Info.module.scss';
import InfoCard from './InfoCard/InfoCard';
import INFO_CARDS from '@/utils/data/INFO_CARDS';

function Info() {
  const infoCards = INFO_CARDS.map((infoCard) => (
    <li className={styles.infoCardItem} key={`infoListItem-${infoCard._id}`}>
      <InfoCard
        key={`infoCard-${infoCard._id}`}
        title={infoCard.title}
        description={infoCard.description}
        image={infoCard.image}
        link={infoCard.link}
      />
    </li>
  ));
  return (
    <section>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Информация по онлайн-курсам</h2>
        <div className={styles.content}>
          <ul className={styles.list}>{infoCards}</ul>
          <div className={styles.decoration} />
        </div>
      </div>
    </section>
  );
}

export default Info;

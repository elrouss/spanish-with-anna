import styles from './DecorativeBackground.module.scss';

function DecorativeBackground() {
  return (
    <div className={styles.section}>
      <div className={styles.background}>
        <div className={styles.billet1}>
          <div className={styles.text}>
            <span className={styles.textAccent} lang="es">
              ¡Buenas tardes!
            </span>
            <span>[ Добрый день! ]</span>
          </div>
        </div>
        <div className={styles.billet2}>
          <div className={styles.text}>
            <span className={styles.textAccent} lang="es">
              ¿Cómo se llama usted?
            </span>
            <span>[ Как вас зовут? ]</span>
          </div>
        </div>
        <div className={styles.billet3}>
          <div className={styles.text}>
            <span className={styles.textAccent} lang="es">
              Muchas gracias
            </span>
            <span>[ Большое спасибо ]</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DecorativeBackground;

import StudyingBenefit from '../StudyingBenefit/StudyingBenefit';

import data from '@/utils/data/studyingBenefits';

import styles from './StudyingBenefits.module.scss';

function StudyingBenefits() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>Преимущества обучения у меня</h2>
        <ul className={styles.benefits}>
          {data.map(({ _id, heading, text, image, alt, width, height }) => (
            <li className={styles.benefit} key={`studyingBenefit_${_id}`}>
              <StudyingBenefit
                key={`studyingBenefitContent_${_id}`}
                heading={heading}
                text={text}
                image={image}
                alt={alt}
                width={width}
                height={height}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.decorative1} />
      <div className={styles.decorative2} />
    </section>
  );
}

export default StudyingBenefits;

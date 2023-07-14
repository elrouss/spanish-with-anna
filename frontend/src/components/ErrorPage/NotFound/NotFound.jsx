import errorImage from '../../../../public/assets/images/404.png';
import ErrorPage from '../ErrorPage';
import styles from './NotFound.module.scss';

function NotFound() {
  return (
    <ErrorPage
      imageWrapperClass={styles.wrapper}
      image={{
        source: errorImage,
        alt: 'Кот в шляпе на книгах около монитора компьютера со знаком вопроса',
        width: 478,
        height: 334,
      }}
      info={{
        heading: 'ОШИБКА 404',
        text: `Упс.. Страница не найдена.\nПохоже, такой страницы нет в нашей системе.`,
      }}
    />
  );
}

export default NotFound;

import errorImage from '../../../../public/assets/images/500.png';
import ErrorPage from '../ErrorPage';
import styles from './InternalServer.module.scss';

function InternalServer() {
  return (
    <ErrorPage
      isServerComponent
      imageWrapperClass={styles.wrapper}
      image={{
        source: errorImage,
        alt: 'Мужчина с ноутбуком на коленях сидит экране монитора, где лупой увеличено изображение жука (т.е. бага)',
        width: 540,
        height: 401,
      }}
      info={{
        heading: 'ОШИБКА СЕРВЕРА 500',
        text: 'Упс..Что-то пошло не так.\nНе беспокойтесь, это не вы. Эта ошибка на нашей стороне.\nМы скоро всё починим.',
      }}
    />
  );
}
export default InternalServer;

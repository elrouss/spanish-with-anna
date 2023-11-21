const signinData = {
  headerLinkExplanation: 'Нет аккаунта?',
  headerLinkText: 'Зарегистрироваться',
  headerLinkHref: '/signup',
  name: 'signin',
  headerLinkAriaLabel: 'Зарегистрироваться',
  heading: 'С ВОЗВРАЩЕНИЕМ',
  subheading: 'Войдите в личный кабинет, чтобы продолжить заниматься',
  politics: 'На сайте соблюдается',
  imageAlt: 'Вход на сайт',
  explanation:
    'Продолжайте учиться, ведь\u00A0вас\u00A0ждёт\u00A0много\u00A0интересного.',
};

const signupData = {
  headerLinkExplanation: 'Уже есть аккаунт?',
  headerLinkText: 'Войти',
  headerLinkHref: '/signin',
  name: 'signup',
  headerLinkAriaLabel: 'Войти',
  heading: 'РЕГИСТРАЦИЯ',
  subheading: 'Создайте личный кабинет, чтобы приступить к занятиям',
  politics:
    'Создавая аккаунт, вы соглашаетесь на обработку персональных данных на условиях',
  imageAlt: 'Регистрация пользователя',
  explanation:
    'Не откладывайте свои\u00A0языковые\u00A0цели на потом, начните\u00A0прямо\u00A0сейчас!',
  passwordHint:
    'Пароль должен содержать латинские буквы a-z, включать цифры, строчные и заглавные буквы. Быть не менее 8 символов.',
};

export { signinData, signupData };

const VALIDATION_MESSAGES = Object.freeze({
  user: {
    email: {
      required: 'Пожалуйста, введите адрес электронной почты',
      invalid: 'Некорректно указан адрес электронной почты',
    },
    name: {
      required: 'Пожалуйста, введите свое имя',
      invalid: 'Некорректно указано имя',
    },
    password: {
      tip: 'Пароль должен содержать не менее 8 символов, включать цифры и заглавные буквы',
      required: 'Пожалуйста, введите пароль',
      invalid: 'Некорректный пароль. Сверьтесь с подсказкой',
    },
    phone: {
      required: 'Пожалуйста, введите номер телефона',
      invalid: 'Некорректно указан номер телефона',
    },
  },

  server: 'На сервере произошла ошибка. Пожалуйста, попробуйте еще раз', // on approve with designer; perhaps, there will be a modal
});

export default VALIDATION_MESSAGES;

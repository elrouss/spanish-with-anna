const reviews = [
  {
    _id: 1,
    name: 'Мария',
    text: 'Я\u00A0занимаюсь с\u00A0Анной Олеговной испанским языком уже два года. Побывала в\u00A0Испании и\u00A0влюбилась в\u00A0эту страну, язык, культуру. Благодаря моему прекрасному преподавателю я\u00A0освоила испанский с\u00A0нуля и\u00A0теперь в\u00A0моем следующем путешествии смогу свободно общаться и\u00A0чувствовать себя увереннее. Хочется отметить, что сами занятия проходят в\u00A0комфортной обстановке, Анна очень тщательно подбирает учебные материалы, отвечает на\u00A0все мои вопросы очень рекомендую для всех, кто влюблён в\u00A0испаноязычный мир, как\u00A0я.',
    image: '/assets/images/review-mary.jpg',
  },
  {
    _id: 2,
    name: 'Лариса',
    text: 'Испанский изучаю давно, но\u00A0разговорной практики всегда было мало. По\u00A0рекомендации своей знакомой я\u00A0обратилась к\u00A0Анне за\u00A0помощью. Анна помогла мне перестать бояться ошибиться, и\u00A0я\u00A0наконец разговорилась. Наши занятия всегда проходили в\u00A0комфортной, дружелюбной атмосфере, мы\u00A0обсуждали самые разные темы: от\u00A0стендап-комедии и\u00A0любимых мультфильмов до\u00A0экологических и\u00A0технологических проблем в\u00A0современном мире. Я\u00A0очень благодарна преподавателю за\u00A0то, что я\u00A0с\u00A0уверенностью могу поддержать диалог на\u00A0любую тему!',
    image: '/assets/images/review-larisa.jpg',
  },

  // Below are reviews for test
  {
    _id: 3,
    name: 'Наталья',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: '/assets/images/review-natalia.jpg',
  },
  {
    _id: 4,
    name: 'Кейт',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: '/assets/images/review-kate.jpeg',
  },
  {
    _id: 5,
    name: 'Брэд',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: '/assets/images/review-brad.webp',
  },
  {
    _id: 6,
    name: 'Анджелина',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: '/assets/images/review-angelina.webp',
  },
  {
    _id: 7,
    name: 'Сара',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: '/assets/images/review-sarah.jpg',
  },
  {
    _id: 8,
    name: 'Синтия',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: '/assets/images/review-synthia.jpeg',
  },
  {
    _id: 9,
    name: 'Ким',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: '/assets/images/review-kim.jpeg',
  },
  {
    _id: 10,
    name: 'Кристина',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: '/assets/images/review-christine.jpeg',
  },
  {
    _id: 11,
    name: 'Хью',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: '/assets/images/review-hugh.webp',
  },
  {
    _id: 12,
    name: 'Лео',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: '/assets/images/review-leonardo.webp',
  },
  {
    _id: 13,
    name: 'Ричард',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: '/assets/images/review-richard.jpeg',
  },
  {
    _id: 14,
    name: 'Рики',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: '/assets/images/review-rikki.jpeg',
  },
  {
    _id: 15,
    name: 'Джастин',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: '/assets/images/review-justin.webp',
  },
];

export default reviews;

const reviews = [
  {
    _id: 1,
    name: 'Мария',
    text: 'Я занимаюсь с Анной Олеговной испанским языком уже два года. Побывала в Испании и влюбилась в эту страну, язык, культуру. Благодаря моему прекрасному преподавателю я освоила испанский с нуля и теперь в моем следующем путешествии смогу свободно общаться и чувствовать себя увереннее. Хочется отметить, что сами занятия проходят в комфортной обстановке, Анна очень тщательно подбирает учебные материалы, отвечает на все мои вопросы очень рекомендую для всех, кто влюблён в испаноязычный мир, как я.',
    photo: '/',
  },
  {
    _id: 2,
    name: 'Лариса',
    text: 'Испанский изучаю давно, но разговорной практики всегда было мало. По рекомендации своей знакомой я обратилась к Анне за помощью. Анна помогла мне перестать бояться ошибиться, и я наконец разговорилась. Наши занятия всегда проходили в комфортной, дружелюбной атмосфере, мы обсуждали самые разные темы: от стендап-комедии и любимых мультфильмов до экологических и технологических проблем в современном мире. Я очень благодарна преподавателю за то, что я с уверенностью могу поддержать диалог на любую тему!',
    photo: '/',
  },

  // Below start reviews for test
  {
    _id: 3,
    name: 'Наталья',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    photo: '/',
  },
  {
    _id: 4,
    name: 'Борис',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    photo: 'https://avatars.githubusercontent.com/u/108838349?v=4',
  },
  {
    _id: 5,
    name: 'Брэд',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    photo:
      'https://cdn.britannica.com/61/137461-050-BB6C5D80/Brad-Pitt-2008.jpg',
  },
  {
    _id: 6,
    name: 'Анджелина',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    photo:
      'https://media.allure.com/photos/647f876463cd1ef47aab9c88/1:1/w_2466,h_2466,c_limit/angelina%20jolie%20blonde%20hair%20chloe.jpg',
  },
  {
    _id: 7,
    name: 'Сара',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    photo: 'https://flxt.tmsimg.com/assets/1315_v9_bb.jpg',
  },
  {
    _id: 8,
    name: 'Синтия',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/2/2a/Cynthia_Nixon_2009_portrait.jpg',
  },
  {
    _id: 9,
    name: 'Ким',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    photo:
      'https://www.rollingstone.com/wp-content/uploads/2023/06/KimCatrallGlamorousTrailer.jpg?w=1581&h=1054&crop=1',
  },
  {
    _id: 10,
    name: 'Кристина',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Kristen-davis-UN-goodwill-ambassador-9may2018.jpg/800px-Kristen-davis-UN-goodwill-ambassador-9may2018.jpg',
  },
  {
    _id: 11,
    name: 'Хью',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    photo:
      'https://cdn.britannica.com/47/201647-050-C547C128/Hugh-Jackman-2013.jpg',
  },
  {
    _id: 12,
    name: 'Лео',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    photo:
      'https://cdn.britannica.com/65/227665-050-D74A477E/American-actor-Leonardo-DiCaprio-2016.jpg',
  },
  {
    _id: 13,
    name: 'Ричард',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    photo:
      'https://hips.hearstapps.com/hbz.h-cdn.co/assets/17/15/hbz-hottest-men-richard-gere-gettyimages-73913907.jpg?crop=1.0xw:1xh;center,top&resize=980:*',
  },
  {
    _id: 14,
    name: 'Рики',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    photo:
      'https://yt3.googleusercontent.com/ZzIeagIqkoUB28nslGqDk16KqRPqwAEvqiAwQP9lom_GCydLrkONPRsedyJKZYXmzXJfmTjo=s900-c-k-c0x00ffffff-no-rj',
  },
  {
    _id: 15,
    name: 'Джастин',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    photo:
      'https://media1.popsugar-assets.com/files/thumbor/XjRICPBMIRaoY_NH8JQ514oaYzc/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2016/06/29/906/n/1922398/2fecb0b913626207_GettyImages-75486813/i/Feeling-You-Had-When-Your-cRuSh-First-Started.jpg',
  },
];

export default reviews;

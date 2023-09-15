export const quizes = [
  {
    language: 'uz',
    question: [
      {
        id: 1,
        question_title: 'HTML nimani anglatadi?',
        category: 'FullStack',
        answers: [
          {
            id: 'a',
            answer: 'HYPERTEXT MONKEY LANGUAGE',
            answer_status: false,
          },
          { id: 'b', answer: 'HOPE THIS MAKES LASAGNE', answer_status: false },
          { id: 'c', answer: 'HOW TO MEET LADIES', answer_status: false },
          { id: 'd', answer: 'HYPERTEXT MARKUP LANGUAGE', answer_status: true },
        ],
      },
      {
        id: 2,
        question_title: 'Как в python выводят текст на экран?',
        category: 'FullStack',
        answers: [
          { id: 'a', answer: "PRINT('HELLO WORLD')", answer_status: true },
          {
            id: 'b',
            answer: "DOCUMENT.WRITE('HELLO WORLD')",
            answer_status: false,
          },
          {
            id: 'c',
            answer: "CONSOLE.LOG('HELLO WORLD')",
            answer_status: false,
          },
          { id: 'd', answer: "OUTPUT('HELLO WORLD')", answer_status: false },
        ],
      },
      {
        id: 3,
        question_title: 'Какой тег в HTML создает заголовок?',
        category: 'FullStack',
        answers: [
          { id: 'a', answer: '<FOOTER>', answer_status: false },
          { id: 'b', answer: '<H1>', answer_status: true },
          { id: 'c', answer: '<P>', answer_status: false },
          { id: 'd', answer: '<IMG>', answer_status: false },
        ],
      },
      {
        id: 4,
        question_title: 'Что такое цикл в программировании?',
        category: 'FullStack',
        answers: [
          { id: 'a', answer: 'ТАНЦЕВАЛЬНОЕ ДВИЖЕНИЕ', answer_status: false },
          {
            id: 'b',
            answer: 'ПОВТОРЯЮЩИЙСЯ ФРАГМЕНТ КОДА',
            answer_status: true,
          },
          { id: 'c', answer: 'ОШИБКА В КОДЕ', answer_status: false },
          { id: 'd', answer: 'СПОСОБ ВЫВОДА ДАННЫХ', answer_status: false },
        ],
      },
      {
        id: 5,
        question_title: 'Где хранятся данные в программировании?',
        category: 'FullStack',
        answers: [
          { id: 'a', answer: 'В ПЕРЕМЕННЫХ', answer_status: false },
          { id: 'b', answer: 'В ФУНКЦИЯХ', answer_status: false },
          { id: 'c', answer: 'В БАЗЕ ДАННЫХ', answer_status: true },
          { id: 'd', answer: 'В КЛАССАХ', answer_status: false },
        ],
      },
      {
        id: 6,
        question_title: 'JavaScript is a statically typed language.',
        category: 'Data Science',
        answers: [
          { id: 'a', answer: 'JavaScript', answer_status: true },
          { id: 'b', answer: 'TypeScript', answer_status: false },
          { id: 'c', answer: 'React', answer_status: false },
          { id: 'd', answer: 'Vue', answer_status: false },
        ],
      },
      {
        id: 7,
        question_title: 'Как называются основной объект для создания. моделей в 3ds MAX?',
        category: 'Data Science',
        answers: [
          { id: 'a', answer: 'MESH', answer_status: true },
          { id: 'b', answer: 'SPLINE', answer_status: false },
          { id: 'c', answer: 'CAMERA', answer_status: false },
          { id: 'd', answer: 'LIGHT', answer_status: false },
        ],
      },
      {
        id: 8,
        question_title: 'Что нужно сделать перед рендерингом сцены?',
        category: 'Data Science',
        answers: [
          {
            id: 'a',
            answer: 'СОЗДАТЬ МАТЕРИАЛЫ И ТЕКСТУРЫ',
            answer_status: false,
          },
          { id: 'b', answer: 'АСТРОИТЬ ОСВЕЩЕНИЕ', answer_status: false },
          { id: 'c', answer: 'УСТОНОВИТЬ КАМЕРУ', answer_status: true },
          { id: 'd', answer: 'ВСЕ ОТВЕТЫ ВЕРНЫ', answer_status: false },
        ],
      },
      {
        id: 9,
        question_title: 'Где настраиваются материалы в 3ds MAX?',
        category: 'Data Science',
        answers: [
          { id: 'a', answer: 'В РЕДАКТОРЕ МАТЕРИАЛОВ', answer_status: true },
          { id: 'b', answer: 'В ОКНЕ MODIFY', answer_status: false },
          { id: 'c', answer: 'ВО ВКЛАДКЕ RENDERING', answer_status: false },
          { id: 'd', answer: 'В МЕНЮ CUSTOMIZE', answer_status: false },
        ],
      },
      {
        id: 10,
        question_title: 'Что нужно сделать перед рендерингом сцены?',
        category: 'Data Science',
        answers: [
          {
            id: 'a',
            answer: 'СОЗДАТЬ МАТЕРИАЛЫ И ТЕКСТУРЫ',
            answer_status: false,
          },
          { id: 'b', answer: 'НАСТРОИТЬ ОСВЕЩЕНИЕ', answer_status: false },
          { id: 'c', answer: 'УСТОНОВИТЬ КАМЕРУ', answer_status: true },
          { id: 'd', answer: 'ВСЕ ОТВЕТЫ ВЕРНЫ', answer_status: false },
        ],
      },
      {
        id: 11,
        question_title: 'Какой протокол используется для передачи веб-страниц и файлов?',
        category: 'Software Engineering',
        answers: [
          { id: 'a', answer: 'FTP', answer_status: false },
          { id: 'b', answer: 'HTTP', answer_status: true },
          { id: 'c', answer: 'SMTP', answer_status: false },
          { id: 'd', answer: 'SSH', answer_status: false },
        ],
      },
      {
        id: 12,
        question_title: 'Что такое IP-адрес',
        category: 'Software Engineering',
        answers: [
          {
            id: 'a',
            answer: 'УНИКАЛЬНЫЙ НОМЕР УСТРОЙСТВА В СЕТИ',
            answer_status: true,
          },
          { id: 'b', answer: 'ПАРОЛЬ ОТ WI-FI', answer_status: false },
          { id: 'c', answer: 'АДРЕС ВЕБ-САЙТА', answer_status: false },
          { id: 'd', answer: 'НОМЕР СОЕДИНЕНИЕ VPN', answer_status: false },
        ],
      },
      {
        id: 13,
        question_title: 'Что такое межсетевой экран (брандмауэр)?',
        category: 'Software Engineering',
        answers: [
          { id: 'a', answer: 'АНТИВИРУС', answer_status: false },
          { id: 'b', answer: 'СПАМ-ФИЛЬТР', answer_status: false },
          { id: 'c', answer: 'ЗАЩИТА ОТ ХАКЕРОВ', answer_status: true },
          {
            id: 'd',
            answer: 'БЛОКИРОВКА ДОСТУПА К СЕТИ',
            answer_status: false,
          },
        ],
      },
      {
        id: 14,
        question_title: 'Как называется аппаратное обеспечение для соединения компьютеров в сеть?',
        category: 'Software Engineering',
        answers: [
          { id: 'a', answer: 'МАРШРУТИЗАТОР', answer_status: true },
          { id: 'b', answer: 'МОНИТОР', answer_status: false },
          { id: 'c', answer: 'ВИДЕОКАРТА', answer_status: false },
          { id: 'd', answer: 'СЕТЕВАЯ КАРТА', answer_status: false },
        ],
      },
      {
        id: 15,
        question_title: 'Что делает системный администратор?',
        category: 'Software Engineering',
        answers: [
          { id: 'a', answer: 'ПРОГРАММИРУЕТ', answer_status: true },
          {
            id: 'b',
            answer: 'ОБСЛУЖИВАЕТ КОМПЬЮТЕРЫ И СЕТИ',
            answer_status: false,
          },
          { id: 'c', answer: 'РАБОТАЕТ В ТЕХПОДДЕРЖКЕ', answer_status: false },
          { id: 'd', answer: 'ТЕСТИРУЕТ ПРИЛОДЕНИЕ', answer_status: false },
        ],
      },
    ],
  },
  {
    language: 'ru',
    question: [
      {
        id: 1,
        question_title: 'Что означает HTML?',
        category: 'FullStack',
        answers: [
          {
            id: 'a',
            answer: 'HYPERTEXT MONKEY LANGUAGE',
            answer_status: false,
          },
          { id: 'b', answer: 'HOPE THIS MAKES LASAGNE', answer_status: false },
          { id: 'c', answer: 'HOW TO MEET LADIES', answer_status: false },
          { id: 'd', answer: 'HYPERTEXT MARKUP LANGUAGE', answer_status: true },
        ],
      },
      {
        id: 2,
        question_title: 'Как в python выводят текст на экран?',
        category: 'FullStack',
        answers: [
          { id: 'a', answer: "PRINT('HELLO WORLD')", answer_status: true },
          {
            id: 'b',
            answer: "DOCUMENT.WRITE('HELLO WORLD')",
            answer_status: false,
          },
          {
            id: 'c',
            answer: "CONSOLE.LOG('HELLO WORLD')",
            answer_status: false,
          },
          { id: 'd', answer: "OUTPUT('HELLO WORLD')", answer_status: false },
        ],
      },
      {
        id: 3,
        question_title: 'Какой тег в HTML создает заголовок?',
        category: 'FullStack',
        answers: [
          { id: 'a', answer: '<FOOTER>', answer_status: false },
          { id: 'b', answer: '<H1>', answer_status: true },
          { id: 'c', answer: '<P>', answer_status: false },
          { id: 'd', answer: '<IMG>', answer_status: false },
        ],
      },
      {
        id: 4,
        question_title: 'Что такое цикл в программировании?',
        category: 'FullStack',
        answers: [
          { id: 'a', answer: 'ТАНЦЕВАЛЬНОЕ ДВИЖЕНИЕ', answer_status: false },
          {
            id: 'b',
            answer: 'ПОВТОРЯЮЩИЙСЯ ФРАГМЕНТ КОДА',
            answer_status: true,
          },
          { id: 'c', answer: 'ОШИБКА В КОДЕ', answer_status: false },
          { id: 'd', answer: 'СПОСОБ ВЫВОДА ДАННЫХ', answer_status: false },
        ],
      },
      {
        id: 5,
        question_title: 'Где хранятся данные в программировании?',
        category: 'FullStack',
        answers: [
          { id: 'a', answer: 'В ПЕРЕМЕННЫХ', answer_status: false },
          { id: 'b', answer: 'В ФУНКЦИЯХ', answer_status: false },
          { id: 'c', answer: 'В БАЗЕ ДАННЫХ', answer_status: true },
          { id: 'd', answer: 'В КЛАССАХ', answer_status: false },
        ],
      },
      {
        id: 6,
        question_title: 'JavaScript is a statically typed language.',
        category: 'Data Science',
        answers: [
          { id: 'a', answer: 'JavaScript', answer_status: true },
          { id: 'b', answer: 'TypeScript', answer_status: false },
          { id: 'c', answer: 'React', answer_status: false },
          { id: 'd', answer: 'Vue', answer_status: false },
        ],
      },
      {
        id: 7,
        question_title: 'Как называются основной объект для создания. моделей в 3ds MAX?',
        category: 'Data Science',
        answers: [
          { id: 'a', answer: 'MESH', answer_status: true },
          { id: 'b', answer: 'SPLINE', answer_status: false },
          { id: 'c', answer: 'CAMERA', answer_status: false },
          { id: 'd', answer: 'LIGHT', answer_status: false },
        ],
      },
      {
        id: 8,
        question_title: 'Что нужно сделать перед рендерингом сцены?',
        category: 'Data Science',
        answers: [
          {
            id: 'a',
            answer: 'СОЗДАТЬ МАТЕРИАЛЫ И ТЕКСТУРЫ',
            answer_status: false,
          },
          { id: 'b', answer: 'АСТРОИТЬ ОСВЕЩЕНИЕ', answer_status: false },
          { id: 'c', answer: 'УСТОНОВИТЬ КАМЕРУ', answer_status: true },
          { id: 'd', answer: 'ВСЕ ОТВЕТЫ ВЕРНЫ', answer_status: false },
        ],
      },
      {
        id: 9,
        question_title: 'Где настраиваются материалы в 3ds MAX?',
        category: 'Data Science',
        answers: [
          { id: 'a', answer: 'В РЕДАКТОРЕ МАТЕРИАЛОВ', answer_status: true },
          { id: 'b', answer: 'В ОКНЕ MODIFY', answer_status: false },
          { id: 'c', answer: 'ВО ВКЛАДКЕ RENDERING', answer_status: false },
          { id: 'd', answer: 'В МЕНЮ CUSTOMIZE', answer_status: false },
        ],
      },
      {
        id: 10,
        question_title: 'Что нужно сделать перед рендерингом сцены?',
        category: 'Data Science',
        answers: [
          {
            id: 'a',
            answer: 'СОЗДАТЬ МАТЕРИАЛЫ И ТЕКСТУРЫ',
            answer_status: false,
          },
          { id: 'b', answer: 'НАСТРОИТЬ ОСВЕЩЕНИЕ', answer_status: false },
          { id: 'c', answer: 'УСТОНОВИТЬ КАМЕРУ', answer_status: true },
          { id: 'd', answer: 'ВСЕ ОТВЕТЫ ВЕРНЫ', answer_status: false },
        ],
      },
      {
        id: 11,
        question_title: 'Какой протокол используется для передачи веб-страниц и файлов?',
        category: 'Software Engineering',
        answers: [
          { id: 'a', answer: 'FTP', answer_status: false },
          { id: 'b', answer: 'HTTP', answer_status: true },
          { id: 'c', answer: 'SMTP', answer_status: false },
          { id: 'd', answer: 'SSH', answer_status: false },
        ],
      },
      {
        id: 12,
        question_title: 'Что такое IP-адрес',
        category: 'Software Engineering',
        answers: [
          {
            id: 'a',
            answer: 'УНИКАЛЬНЫЙ НОМЕР УСТРОЙСТВА В СЕТИ',
            answer_status: true,
          },
          { id: 'b', answer: 'ПАРОЛЬ ОТ WI-FI', answer_status: false },
          { id: 'c', answer: 'АДРЕС ВЕБ-САЙТА', answer_status: false },
          { id: 'd', answer: 'НОМЕР СОЕДИНЕНИЕ VPN', answer_status: false },
        ],
      },
      {
        id: 13,
        question_title: 'Что такое межсетевой экран (брандмауэр)?',
        category: 'Software Engineering',
        answers: [
          { id: 'a', answer: 'АНТИВИРУС', answer_status: false },
          { id: 'b', answer: 'СПАМ-ФИЛЬТР', answer_status: false },
          { id: 'c', answer: 'ЗАЩИТА ОТ ХАКЕРОВ', answer_status: true },
          {
            id: 'd',
            answer: 'БЛОКИРОВКА ДОСТУПА К СЕТИ',
            answer_status: false,
          },
        ],
      },
      {
        id: 14,
        question_title: 'Как называется аппаратное обеспечение для соединения компьютеров в сеть?',
        category: 'Software Engineering',
        answers: [
          { id: 'a', answer: 'МАРШРУТИЗАТОР', answer_status: true },
          { id: 'b', answer: 'МОНИТОР', answer_status: false },
          { id: 'c', answer: 'ВИДЕОКАРТА', answer_status: false },
          { id: 'd', answer: 'СЕТЕВАЯ КАРТА', answer_status: false },
        ],
      },
      {
        id: 15,
        question_title: 'Что делает системный администратор?',
        category: 'Software Engineering',
        answers: [
          { id: 'a', answer: 'ПРОГРАММИРУЕТ', answer_status: true },
          {
            id: 'b',
            answer: 'ОБСЛУЖИВАЕТ КОМПЬЮТЕРЫ И СЕТИ',
            answer_status: false,
          },
          { id: 'c', answer: 'РАБОТАЕТ В ТЕХПОДДЕРЖКЕ', answer_status: false },
          { id: 'd', answer: 'ТЕСТИРУЕТ ПРИЛОДЕНИЕ', answer_status: false },
        ],
      },
    ],
  },
];

export const quizes = [
  {
    language: "uz",
    question: [
      {
        id: 1,
        question_title: "HTML nimani anglatadi?",
        category: "FullStack",
        answers: [
          {
            id: "a",
            answer: "HYPERTEXT MONKEY LANGUAGE",
            answer_status: false,
          },
          { id: "b", answer: "HOPE THIS MAKES LASAGNE", answer_status: false },
          { id: "c", answer: "HOW TO MEET LADIES", answer_status: false },
          { id: "d", answer: "HYPERTEXT MARKUP LANGUAGE", answer_status: true },
        ],
      },
      {
        id: 2,
        question_title:
          "Pythonda qanday qilib ekranga matnni chiqarsa bo‘ladi?",
        category: "FullStack",
        answers: [
          { id: "a", answer: "PRINT('HELLO WORLD')", answer_status: true },
          {
            id: "b",
            answer: "DOCUMENT.WRITE('HELLO WORLD')",
            answer_status: false,
          },
          {
            id: "c",
            answer: "CONSOLE.LOG('HELLO WORLD')",
            answer_status: false,
          },
          { id: "d", answer: "OUTPUT('HELLO WORLD')", answer_status: false },
        ],
      },
      {
        id: 3,
        question_title:
          "HTMLda sarlavha yaratish uchun qanaqa tag ishlatilinadi?",
        category: "FullStack",
        answers: [
          { id: "a", answer: "<FOOTER>", answer_status: false },
          { id: "b", answer: "<H1>", answer_status: true },
          { id: "c", answer: "<P>", answer_status: false },
          { id: "d", answer: "<IMG>", answer_status: false },
        ],
      },
      {
        id: 4,
        question_title: "Tsikl dasturlashda nimani anglatadi?",
        category: "FullStack",
        answers: [
          { id: "a", answer: "O‘ynash harakatlari", answer_status: false },
          {
            id: "b",
            answer: "Qaytariladigan kod parchasi",
            answer_status: true,
          },
          { id: "c", answer: "Kodda Xatolik", answer_status: false },
          {
            id: "d",
            answer: "Ma‘lumotlarni chiqarish uchun usul",
            answer_status: false,
          },
        ],
      },
      {
        id: 5,
        question_title: "Ma‘lumotlar dasturlashda qayerda saqlanadi?",
        category: "FullStack",
        answers: [
          { id: "a", answer: "O‘zgaruvchilarda", answer_status: false },
          { id: "b", answer: "Funksiyalarda", answer_status: false },
          { id: "c", answer: "Ma‘lumotlar bazasida", answer_status: true },
          { id: "d", answer: "Bo‘limlarda", answer_status: false },
        ],
      },
      {
        id: 6,
        question_title: "JavaScript is a statically typed language.",
        category: "Data Science",
        answers: [
          { id: "a", answer: "JavaScript", answer_status: false },
          { id: "b", answer: "TypeScript", answer_status: true },
          { id: "c", answer: "React", answer_status: false },
          { id: "d", answer: "Vue", answer_status: false },
        ],
      },
      {
        id: 7,
        question_title:
          "3DS Maxda modellar yaratish uchun asosiy obyekt qanday nomlanadi?",
        category: "Data Science",
        answers: [
          { id: "a", answer: "MESH", answer_status: true },
          { id: "b", answer: "SPLINE", answer_status: false },
          { id: "c", answer: "CAMERA", answer_status: false },
          { id: "d", answer: "LIGHT", answer_status: false },
        ],
      },
      {
        id: 8,
        question_title: "Sahnani tasvirlashdan oldin nima qilish kerak?",
        category: "Data Science",
        answers: [
          {
            id: "a",
            answer: "Material va tekstura yaratish",
            answer_status: false,
          },
          { id: "b", answer: "Yorug‘likni to‘g‘irlash", answer_status: false },
          { id: "c", answer: "Kamera o‘rnatish", answer_status: true },
          { id: "d", answer: "Hamma javoblar to‘g‘ri", answer_status: false },
        ],
      },
      {
        id: 9,
        question_title: "3DS Max-da materiallar qayerda sozlanadi",
        category: "Data Science",
        answers: [
          { id: "a", answer: "materiallar muharririda", answer_status: true },
          { id: "b", answer: "MODIFY bo‘limida", answer_status: false },
          { id: "c", answer: "RENDERING bo‘limida", answer_status: false },
          { id: "d", answer: "CUSTOMIZE menyusida", answer_status: false },
        ],
      },
      {
        id: 10,
        question_title: "Sahnani tasvirlashdan oldin nima qilish kerak?",
        category: "Data Science",
        answers: [
          {
            id: "a",
            answer: "Material va tekstura yaratish",
            answer_status: false,
          },
          { id: "b", answer: "Yorug‘likni to‘g‘irlash", answer_status: false },
          { id: "c", answer: "Kamera o‘rnatish", answer_status: true },
          { id: "d", answer: "Hamma javoblar to‘g‘ri", answer_status: false },
        ],
      },
      {
        id: 11,
        question_title:
          "Veb-sahifalar va fayllarni uzatish uchun qanday protokol ishlatiladi?",
        category: "Software Engineering",
        answers: [
          { id: "a", answer: "FTP", answer_status: false },
          { id: "b", answer: "HTTP", answer_status: true },
          { id: "c", answer: "SMTP", answer_status: false },
          { id: "d", answer: "SSH", answer_status: false },
        ],
      },
      {
        id: 12,
        question_title: "IP-address nima?",
        category: "Software Engineering",
        answers: [
          {
            id: "a",
            answer: "Tarmoqdagi qurilmaning noyob raqami",
            answer_status: true,
          },
          { id: "b", answer: "WI-FI paroli", answer_status: false },
          { id: "c", answer: "Veb-sayt manzili", answer_status: false },
          { id: "d", answer: "VPN ulanish nomeri", answer_status: false },
        ],
      },
      {
        id: 13,
        question_title: "Xavfsizlik devori nima (brandmauer)?",
        category: "Software Engineering",
        answers: [
          { id: "a", answer: "Antivirus", answer_status: false },
          { id: "b", answer: "Spam", answer_status: false },
          { id: "c", answer: "Xakerlardan xavfsizlanish", answer_status: true },
          { id: "d", answer: "Tarmoqdan bloklaydi", answer_status: false },
        ],
      },
      {
        id: 14,
        question_title:
          "Kompyuterlarni tarmoqqa ulash uchun ishlatiladigan texnik vositalar qanday nomlanadi?",
        category: "Software Engineering",
        answers: [
          { id: "a", answer: "Router", answer_status: true },
          { id: "b", answer: "Monitor", answer_status: false },
          { id: "c", answer: "Videokarta", answer_status: false },
          { id: "d", answer: "LAN kartasi", answer_status: false },
        ],
      },
      {
        id: 15,
        question_title: "Tizim administratori nima qiladi?",
        category: "Software Engineering",
        answers: [
          { id: "a", answer: "Dasturlaydi", answer_status: false },
          {
            id: "b",
            answer: "Kompyuterlar va tarmoqlarga xizmat qiladi",
            answer_status: true,
          },
          { id: "c", answer: "Texnik yordamda ishlaydi", answer_status: false },
          { id: "d", answer: "Ilovalarni sinaydi", answer_status: false },
        ],
      },
    ],
  },
  {
    language: "ru",
    question: [
      {
        id: 1,
        question_title: "Что означает HTML?",
        category: "FullStack",
        answers: [
          {
            id: "a",
            answer: "HYPERTEXT MONKEY LANGUAGE",
            answer_status: false,
          },
          { id: "b", answer: "HOPE THIS MAKES LASAGNE", answer_status: false },
          { id: "c", answer: "HOW TO MEET LADIES", answer_status: false },
          { id: "d", answer: "HYPERTEXT MARKUP LANGUAGE", answer_status: true },
        ],
      },
      {
        id: 2,
        question_title: "Как в python выводят текст на экран?",
        category: "FullStack",
        answers: [
          { id: "a", answer: "PRINT('HELLO WORLD')", answer_status: true },
          {
            id: "b",
            answer: "DOCUMENT.WRITE('HELLO WORLD')",
            answer_status: false,
          },
          {
            id: "c",
            answer: "CONSOLE.LOG('HELLO WORLD')",
            answer_status: false,
          },
          { id: "d", answer: "OUTPUT('HELLO WORLD')", answer_status: false },
        ],
      },
      {
        id: 3,
        question_title: "Какой тег в HTML создает заголовок?",
        category: "FullStack",
        answers: [
          { id: "a", answer: "<FOOTER>", answer_status: false },
          { id: "b", answer: "<H1>", answer_status: true },
          { id: "c", answer: "<P>", answer_status: false },
          { id: "d", answer: "<IMG>", answer_status: false },
        ],
      },
      {
        id: 4,
        question_title: "Что такое цикл в программировании?",
        category: "FullStack",
        answers: [
          { id: "a", answer: "ТАНЦЕВАЛЬНОЕ ДВИЖЕНИЕ", answer_status: false },
          {
            id: "b",
            answer: "ПОВТОРЯЮЩИЙСЯ ФРАГМЕНТ КОДА",
            answer_status: true,
          },
          { id: "c", answer: "ОШИБКА В КОДЕ", answer_status: false },
          { id: "d", answer: "СПОСОБ ВЫВОДА ДАННЫХ", answer_status: false },
        ],
      },
      {
        id: 5,
        question_title: "Где хранятся данные в программировании?",
        category: "FullStack",
        answers: [
          { id: "a", answer: "В ПЕРЕМЕННЫХ", answer_status: false },
          { id: "b", answer: "В ФУНКЦИЯХ", answer_status: false },
          { id: "c", answer: "В БАЗЕ ДАННЫХ", answer_status: true },
          { id: "d", answer: "В КЛАССАХ", answer_status: false },
        ],
      },
      {
        id: 6,
        question_title: "JavaScript is a statically typed language.",
        category: "Data Science",
        answers: [
          { id: "a", answer: "JavaScript", answer_status: true },
          { id: "b", answer: "TypeScript", answer_status: false },
          { id: "c", answer: "React", answer_status: false },
          { id: "d", answer: "Vue", answer_status: false },
        ],
      },
      {
        id: 7,
        question_title:
          "Как называются основной объект для создания. моделей в 3ds MAX?",
        category: "Data Science",
        answers: [
          { id: "a", answer: "MESH", answer_status: true },
          { id: "b", answer: "SPLINE", answer_status: false },
          { id: "c", answer: "CAMERA", answer_status: false },
          { id: "d", answer: "LIGHT", answer_status: false },
        ],
      },
      {
        id: 8,
        question_title: "Что нужно сделать перед рендерингом сцены?",
        category: "Data Science",
        answers: [
          {
            id: "a",
            answer: "СОЗДАТЬ МАТЕРИАЛЫ И ТЕКСТУРЫ",
            answer_status: false,
          },
          { id: "b", answer: "АСТРОИТЬ ОСВЕЩЕНИЕ", answer_status: false },
          { id: "c", answer: "УСТОНОВИТЬ КАМЕРУ", answer_status: true },
          { id: "d", answer: "ВСЕ ОТВЕТЫ ВЕРНЫ", answer_status: false },
        ],
      },
      {
        id: 9,
        question_title: "Где настраиваются материалы в 3ds MAX?",
        category: "Data Science",
        answers: [
          { id: "a", answer: "В РЕДАКТОРЕ МАТЕРИАЛОВ", answer_status: true },
          { id: "b", answer: "В ОКНЕ MODIFY", answer_status: false },
          { id: "c", answer: "ВО ВКЛАДКЕ RENDERING", answer_status: false },
          { id: "d", answer: "В МЕНЮ CUSTOMIZE", answer_status: false },
        ],
      },
      {
        id: 10,
        question_title: "Что нужно сделать перед рендерингом сцены?",
        category: "Data Science",
        answers: [
          {
            id: "a",
            answer: "СОЗДАТЬ МАТЕРИАЛЫ И ТЕКСТУРЫ",
            answer_status: false,
          },
          { id: "b", answer: "НАСТРОИТЬ ОСВЕЩЕНИЕ", answer_status: false },
          { id: "c", answer: "УСТОНОВИТЬ КАМЕРУ", answer_status: true },
          { id: "d", answer: "ВСЕ ОТВЕТЫ ВЕРНЫ", answer_status: false },
        ],
      },
      {
        id: 11,
        question_title:
          "Какой протокол используется для передачи веб-страниц и файлов?",
        category: "Software Engineering",
        answers: [
          { id: "a", answer: "FTP", answer_status: false },
          { id: "b", answer: "HTTP", answer_status: true },
          { id: "c", answer: "SMTP", answer_status: false },
          { id: "d", answer: "SSH", answer_status: false },
        ],
      },
      {
        id: 12,
        question_title: "Что такое IP-адрес",
        category: "Software Engineering",
        answers: [
          {
            id: "a",
            answer: "УНИКАЛЬНЫЙ НОМЕР УСТРОЙСТВА В СЕТИ",
            answer_status: true,
          },
          { id: "b", answer: "ПАРОЛЬ ОТ WI-FI", answer_status: false },
          { id: "c", answer: "АДРЕС ВЕБ-САЙТА", answer_status: false },
          { id: "d", answer: "НОМЕР СОЕДИНЕНИЕ VPN", answer_status: false },
        ],
      },
      {
        id: 13,
        question_title: "Что такое межсетевой экран (брандмауэр)?",
        category: "Software Engineering",
        answers: [
          { id: "a", answer: "АНТИВИРУС", answer_status: false },
          { id: "b", answer: "СПАМ-ФИЛЬТР", answer_status: false },
          { id: "c", answer: "ЗАЩИТА ОТ ХАКЕРОВ", answer_status: true },
          {
            id: "d",
            answer: "БЛОКИРОВКА ДОСТУПА К СЕТИ",
            answer_status: false,
          },
        ],
      },
      {
        id: 14,
        question_title:
          "Как называется аппаратное обеспечение для соединения компьютеров в сеть?",
        category: "Software Engineering",
        answers: [
          { id: "a", answer: "МАРШРУТИЗАТОР", answer_status: true },
          { id: "b", answer: "МОНИТОР", answer_status: false },
          { id: "c", answer: "ВИДЕОКАРТА", answer_status: false },
          { id: "d", answer: "СЕТЕВАЯ КАРТА", answer_status: false },
        ],
      },
      {
        id: 15,
        question_title: "Что делает системный администратор?",
        category: "Software Engineering",
        answers: [
          { id: "a", answer: "ПРОГРАММИРУЕТ", answer_status: true },
          {
            id: "b",
            answer: "ОБСЛУЖИВАЕТ КОМПЬЮТЕРЫ И СЕТИ",
            answer_status: false,
          },
          { id: "c", answer: "РАБОТАЕТ В ТЕХПОДДЕРЖКЕ", answer_status: false },
          { id: "d", answer: "ТЕСТИРУЕТ ПРИЛОДЕНИЕ", answer_status: false },
        ],
      },
    ],
  },
];

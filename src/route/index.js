// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяц',
  adress: 'Blois, France',
}

var footer = {
  social: {
    email: {
      text: 'dmytro@mail.com',
      href: 'mailto:dmytro@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}

router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

router.get('/summary', function (req, res) {
  res.render('summary', {
    page: {
      title: 'Resume | Summary',
      big: true,
    },
    header,
    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. 
              Whenever I start to work on a new project I learn the domain and try to 
              understand the idea of the project. Good team player, every colleague is a friend to me.`,
      },
      expirience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
              tournament position, goals etc), analyzing by simple mathematics models and preparing probability
              for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },
    footer,
  })
})

router.get('/skills', function (req, res) {
  res.render('skills', {
    page: {
      title: 'Resume | Skills',
    },
    header,
    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Hanblebars',
          point: 9,
          isTop: false,
        },
        {
          name: 'VS Code',
          point: 10,
          isTop: true,
        },
        {
          name: 'Git',
          point: 9,
          isTop: false,
        },
        {
          name: 'Terminal',
          point: 7,
        },
        {
          name: 'NPM',
          point: 10,
          isTop: true,
        },
        {
          name: 'React.js',
          point: 0,
          isTop: false,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
      hobbies: [
        {
          name: 'Guitar',
          isMain: true,
        },
        {
          name: 'Video Games',
          isMain: false,
        },
        {
          name: 'Velo sport',
          isMain: true,
        },
      ],
    },
    footer,
  })
})

router.get('/education', function (req, res) {
  res.render('education', {
    page: {
      title: 'Resume | Education',
    },
    header,
    main: {
      educations: [
        {
          name: 'ЗОШ №10',
          isEnd: true,
        },
        {
          name: 'ЗОШ №3',
          isEnd: true,
        },
        {
          name: 'ЗОШ №9',
          isEnd: false,
        },
        {
          name: 'НКПТ',
          isEnd: true,
        },
        {
          name: 'СІЗО',
          isEnd: false,
        },
      ],
      certificates: [
        {
          name: 'Нігтики',
          id: 1,
        },
        {
          name: 'Майстер маляр',
          id: 2,
        },
        {
          name: 'HTML/CSS',
          id: 3,
        },
      ],
    },
    footer,
  })
})

router.get('/work', function (req, res) {
  res.render('work', {
    layout: 'big',

    page: {
      title: 'Resume | Work',
      big: true,
    },

    header,

    main: {
      works: [
        {
          position: 'Junior FullStack Developer',
          company: {
            name: 'It Brains',
            url: 'https://it-brains.com.ua',
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },
          projectAmount: 3,
          projects: [
            {
              name: 'Resume',
              url: 'https://resume.com.ua',
              about:
                'azlkjxfa;jxs azlks;fkajds;f ask;jfd;alskd[alskfadlgs',
              stackAmount: 3,
              stacks: [
                { name: 'Reacts.js' },
                { name: 'HTML / CSS' },
                { name: 'Node.js' },
              ],
              awardsAmount: 2,
              awards: [
                {
                  name: 'aslkdjfa;nma asofdkas;ofj askfja;lskd',
                },
                {
                  name: 'aslkdjfa;nma asofdkas;ofj askfja;lskd',
                },
              ],
            },
          ],
        },
      ],
    },

    footer,
  })
})
// Підключаємо роутер до бек-енду
module.exports = router

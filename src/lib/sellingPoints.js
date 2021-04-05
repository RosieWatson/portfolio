export default {
  education: {
    id: 'education',
    icon: 'fa-user-graduate',
    title: 'Education',
    data: [
      {
        title: 'University of Kent',
        titleLink: 'https://www.cs.kent.ac.uk/',
        date: 'September 2015 - June 2019',
        details: ['BSc (hons) Computer Science', 'First Class'],
      },
    ],
  },
  experience: {
    id: 'experience',
    icon: 'fa-user-tie',
    title: 'Experience',
    data: [
      {
        title: 'Lingumi',
        titleLink: 'https://lingumi.com/',
        date: 'August 2020 - Present',
        details: ['Full Stack Developer'],
        image: require('../assets/lingumi_phone.png'),
      },
      {
        title: 'Holiday Extras',
        titleLink: 'https://www.holidayextras.co.uk/',
        date: 'July 2017 - July 2020',
        details: ['Software Engineer'],
        image: require('../assets/hx_phone.png'),
      },
      {
        title: 'Apart of Me',
        titleLink: 'http://apartofme.app/',
        date: 'April 2020 - December 2020',
        details: ['Lead Developer (volunteer)'],
        image: require('../assets/AoM_phone.png'),
      },
    ],
  },
  projects: {
    id: 'projects',
    icon: 'fa-book-reader',
    title: 'Projects',
    data: [
      {
        title: 'Esports Guide - App Development',
        titleLink:
          'https://play.google.com/store/apps/details?id=com.esportsguide',
        date: null,
        details: [
          'Written in React Native and released to Google Play Store, using Firebase for API requests and analytics and pulling data from a third party REST API',
        ],
      },
      {
        title: 'Space Dashboard',
        titleLink: 'https://github.com/RosieWatson/space-dashboard',
        date: null,
        details: [
          'Dashboard of space facts and latest news using React, Redux, Webpack and working with APIs',
        ],
      },
    ],
  },
  skills: {
    id: 'skills',
    icon: 'fa-user-astronaut',
    title: 'Skills',
    data: [
      {
        title: 'Languages',
        titleLink: null,
        date: null,
        details: ['JavaScript, TypeScript, HTML, CSS'],
      },
      {
        title: 'Technologies and Frameworks',
        titleLink: null,
        date: null,
        details: [
          'React, Redux, LESS, Node.JS, Enzyme, Bootstrap, Firebase, Handlebars, Jekyll',
        ],
      },
      {
        title: 'Other',
        titleLink: null,
        date: null,
        details: ['Git, Jira, Agile, CI/CD, CLI'],
      },
    ],
  },
}

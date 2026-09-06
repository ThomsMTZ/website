export const en = {
  // Navbar
  navbar: {
    about: 'ABOUT',
    experience: 'EXPERIENCE',
    skills: 'SKILLS',
    projects: 'PROJECTS',
    education: 'EDUCATION',
  },

  // Hero Section
  hero: {
    greeting: 'Hello,',
    thisIs: 'This is',
    professional: "I'm a Professional",
    contactMe: 'Contact me',
    getResume: 'Get Resume',
    coder: {
      name: 'name:',
      skills: 'skills:',
      hardWorker: 'hardWorker:',
      quickLearner: 'quickLearner:',
      problemSolver: 'problemSolver:',
      hireable: 'hireable:',
      returnStatement: 'return',
    },
  },

  // About Section
  about: {
    title: 'ABOUT ME',
    heading: 'Who I am?',
    description:
      'I am a software engineer with a passion for problem-solving and continuous learning. I have experience in various technologies and enjoy working on challenging projects that push my limits. I am also a certified Scrum Master, which allows me to effectively lead teams and ensure successful project delivery.',
  },

  // Skills Section
  skills: {
    title: 'Skills',
  },

  // Experience Section
  experience: {
    title: 'Experiences',
    list: [
      {
        id: 1,
        title: 'Software Engineer (FullStack, Scrum Master)',
        company: 'Tricentis, France',
        duration: '(Oct 2020 - March 2025)',
      },
      {
        id: 2,
        title: 'Volunteer Intervention Leader',
        company: 'French Red Cross',
        duration: '(Nov 2022 – Now)',
      },
      {
        id: 3,
        title: 'Software Engineer (FullStack, Scrum Master)',
        company: 'Thales, Roumania',
        duration: '(May 2025 - Present)',
      },
    ],
  },

  // Projects Section
  projects: {
    title: 'PROJECTS',
    viewMore: 'View More',
    list: [
      {
        id: 1,
        name: 'LedScroller2025',
        description:
          'Cross-platform mobile application (iOS, Android, Web) simulating an authentic retro neon LED scrolling display. Engineered with Expo SDK 54 and React Native 0.81. Built with modular architecture: silky-smooth 60fps animations powered by Reanimated 4 (native Worklets), complex gesture handling (pinch-to-zoom dynamic text resizing and double-tap via Gesture Handler v2), LED grid overlay shaders, rainbow color pickers, i18n localization (EN/FR/ES), and AsyncStorage persistence. Engineered to enterprise standards with 92% test coverage verified by SonarCloud Quality Gate.',
        tools: ['React Native', 'Expo', 'TypeScript', 'Reanimated', 'Gesture Handler', 'SonarCloud'],
        role: 'Mobile Developer',
        code: 'https://github.com/ThomsMTZ/LedScroller2025',
      },
      {
        id: 2,
        name: 'Expo React native Tutorial',
        description:
          'The main objective is to master the fundamentals of React Native and the Expo framework in order to be able to build my own application afterwards. This tutorial has been very enriching and has allowed me to understand the subtleties of the framework.',
        tools: ['React-Native', 'Typescript', 'Expo'],
        role: 'FullStack Developer',
      },
    ],
  },

  // Education Section
  education: {
    title: 'Educations',
    list: [
      {
        id: 1,
        title: 'Engineering Degree in Computer Science & Technology ',
        duration: '2017 – 2020',
        institution: 'PolyTech School in Marseille',
      },
      {
        id: 2,
        title: 'TOEIC',
        duration: '2020',
        institution: '835 points',
      },
      {
        id: 3,
        title: 'PSM 1 Scrum Master',
        duration: '2024',
        institution: 'Scrum.org',
      },
    ],
  },

  // Contact Section
  contact: {
    title: 'CONTACT',
    heading: 'Contact with me',
    description:
      "If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests.",
    form: {
      name: 'Your Name:',
      email: 'Your Email:',
      message: 'Your Message:',
      send: 'Send Message',
      sending: 'Sending Message...',
      invalidEmail: 'Please provide a valid email!',
      required: 'All fields are required!',
      success: 'Message sent successfully!',
      error: 'Something went wrong.',
    },
  },

  // Footer
  footer: {
    copyright: 'Made with ❤️ by',
  },

  // 404 Page
  notFound: {
    title: '404',
    subtitle: 'Page Not Found',
    description: 'Sorry, the page you are looking for does not exist.',
    goHome: 'Go to Home',
  },
};

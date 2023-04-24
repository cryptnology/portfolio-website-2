import { GitHub, LinkedIn, Twitter, YouTube } from '@/Icons';
import {
  filmpire,
  nextjs,
  reactjs18,
  web3,
  blockchain,
  evmDevelopment,
  chatGpt,
  figma,
  git,
  javascript,
  reactjs,
  redux,
  tailwind,
  threejs,
  typescript,
} from '@/public/images';

const links = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'About',
    link: '/about',
  },
  {
    title: 'Projects',
    link: '/projects',
  },
  {
    title: 'Learning',
    link: '/learning',
  },
];

const socialLinks = [
  {
    link: 'https://twitter.com/CryptnologyDev',
    icon: Twitter,
  },
  {
    link: 'https://www.youtube.com/channel/UC1ksb5e9FEqKB3Tl3NvaCIw',
    icon: YouTube,
  },
  {
    link: 'https://github.com/cryptnology',
    icon: GitHub,
  },
  {
    link: 'https://www.linkedin.com/in/jamie-anderson-121061200',
    icon: LinkedIn,
  },
];

/* Page content */
const homePage = {
  heading: 'Code your dreams into reality.',
  subheading:
    'As a skilled full-stack developer with expertise in Web3, Typescript, React.js, and Next.js, I am committed to transforming concepts into cutting-edge web applications. Discover my latest projects and articles, highlighting my proficiency in building robust and dynamic web interfaces.',
  resumeBtn: 'Resume',
  contact: 'Contact',
  metadata: {
    title: 'Jamie Anderson | Cryptnology',
    description:
      'As a skilled full-stack developer with expertise in Web3, TypeScript, React.js, and Next.js, I am committed to transforming concepts into cutting-edge web applications. Discover my latest projects and articles, highlighting my proficiency in building robust and dynamic web interfaces.',
  },
  emailMe: 'Email Me',
};

const aboutPage = {
  heading: 'Building the Future Web!',
  aboutMe: {
    heading: 'About me',
    paragraphs: [
      {
        content:
          "Hi, I'm Jamie, a web developer with a passion for creating beautiful, functional, and user-centered digital experiences. With over a years of experience in the field. I'am always looking for new and innovative ways to bring visions to life.",
      },
      {
        content:
          "I believe that design is about more than just making things look pretty - it's about solving problems and creating intuitive, enjoyable experiences for users.",
      },
      {
        content:
          "Whether I'm working on a website or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to the next project.",
      },
    ],
  },
  experienceNumbers: [
    {
      number: 5,
      title: 'Web2 Projects',
    },
    {
      number: 3,
      title: 'Web3 projects',
    },
    {
      number: 1,
      title: 'Years of experience',
    },
  ],
  education: [
    {
      type: 'Bachelor of Science in Information Technology',
      time: '2019-2021',
      place: 'University Of Technology Sydney (UTS)',
      info: 'Relevant courses included Web Systems, Applications Programming, Intro to Software Development and Cybersecurity.',
    },
  ],
  experience: [
    {
      position: 'Software Engineer',
      company: 'Serenade',
      time: '2021-Present',
      address: 'Sydney, AU',
      work: 'Worked on a team responsible for developing new features for artists to sell music NFTs to their fans. This included building the Next.js website, user interfaces, using all the update best code practices and testing.',
      companyLink: 'https://serenade.co',
    },
  ],
  technologies: [
    {
      name: 'JavaScript',
      icon: javascript,
    },
    {
      name: 'TypeScript',
      icon: typescript,
    },
    {
      name: 'React JS',
      icon: reactjs,
    },
    {
      name: 'Redux Toolkit',
      icon: redux,
    },
    {
      name: 'Tailwind CSS',
      icon: tailwind,
    },
    {
      name: 'Three JS',
      icon: threejs,
    },
    {
      name: 'git',
      icon: git,
    },
    {
      name: 'figma',
      icon: figma,
    },
  ],
  metadata: {
    title: 'Cryptnology | About Me',
    description:
      "Hi, I'm Jamie, a web developer with a passion for creating beautiful, functional, and user-centered digital experiences. With over a years of experience in the field. I'am always looking for new and innovative ways to bring visions to life.",
  },
};

const projectsPage = {
  heading: 'Imagination transcends knowledge!',
  projects: [
    {
      type: 'Featured Project',
      title: 'Filmpire',
      summary:
        'An AI powered movie app that allows you to search for the latest movies via categories, genres or a search bar and is fully responsive with the choice of using a dark or light theme. You can also create / log in to your profile where can see all your favourite and watchlisted movies. The app is built using React, Redux, React Router, Alan AI, Axios, Material UI and the TMDB API.',
      img: filmpire,
      link: 'https://filmpire-omega.vercel.app',
      github: 'https://github.com/cryptnology/filmpire',
    },
  ],
  metadata: {
    title: 'Cryptnology | Projects',
    description: 'My projects.',
  },
};

const learningPage = {
  heading: 'Knowledge is power!',
  topicsHeading: 'Playlists and videos',
  featuredTopics: [
    {
      title: 'Next.js 13 - The basics',
      summary: 'Learn about all the new features in Next.js version 13.',
      amount: 9,
      link: 'https://www.youtube.com/watch?v=__mSgDEOyv8',
      img: nextjs,
    },
    {
      title: 'React.js 18 - Migrating from v17 or v16',
      summary: 'Learn about all the new features in React.js version 18.',
      amount: 15,
      link: 'https://www.youtube.com/watch?v=bCZVos-yZXw',
      img: reactjs18,
    },
    {
      title: 'What is Web 3.0?',
      summary:
        'Learn about Web 3.0 and how it differs from the past versions of the internet.',
      amount: 9,
      link: 'https://www.youtube.com/watch?v=nHhAEkG1y2U',
      img: web3,
    },
    {
      title: 'How does a blockchain work?',
      summary:
        'Learn what is a blockchain, how do they work and why blockchains are so special.',
      amount: 6,
      link: 'https://www.youtube.com/watch?v=SSo_EIwHSd4',
      img: blockchain,
    },
  ],
  topics: [
    {
      title:
        'Learn about EVM-based Blockchain Development in this great playlist that covers all of the relevant topics you need to know.',
      amount: 35,
      amountText: '+ videos',
      link: 'https://www.youtube.com/watch?v=XTbd5w0AXc4&list=PLvfQp12V0hS1LmcDq23mdocEaMVHtp_IK',
      img: evmDevelopment,
    },
    {
      title:
        'Learn how to build a full decentralised app (DApp) using ChatGPT. Great introduction into ChatGPT and DApps.',
      amount: 20,
      link: 'https://www.youtube.com/watch?v=i_a9bqvqmzo',
      img: chatGpt,
    },
  ],
  metadata: {
    title: 'Cryptnology | Learning',
    description: 'Learning',
  },
};

export { homePage, aboutPage, projectsPage, learningPage, links, socialLinks };

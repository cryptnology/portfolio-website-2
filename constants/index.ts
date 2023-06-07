import { GitHub, LinkedIn, Twitter, YouTube } from '@/Icons';
import {
  git,
  reactjs,
  redux,
  tailwind,
  threejs,
  typescript,
  solidity,
  nextjs,
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
  profileImg:
    'https://res.cloudinary.com/dmhu2ksdk/image/upload/v1686135004/profile-image_ya7k0v.png',
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
      number: 4,
      title: 'Web2 Projects',
    },
    {
      number: 2,
      title: 'Web3 projects',
    },
    {
      number: 2,
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
      name: 'Typescript',
      icon: typescript,
    },
    {
      name: 'React.js',
      icon: reactjs,
    },
    {
      name: 'Next.js',
      icon: nextjs,
    },
    {
      name: 'Redux Toolkit',
      icon: redux,
    },
    {
      name: 'Tailwind',
      icon: tailwind,
    },
    {
      name: 'Three.js',
      icon: threejs,
    },
    {
      name: 'Git',
      icon: git,
    },
    {
      name: 'Solidity',
      icon: solidity,
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
      img: 'https://res.cloudinary.com/dmhu2ksdk/image/upload/v1686131432/filmpire_shggid.png',
      link: 'https://filmpire-omega.vercel.app',
      github: 'https://github.com/cryptnology/filmpire',
      demo: 'oFVDiNYIR08',
    },
    {
      type: 'Project',
      title: 'NFT Card Battle Game',
      img: 'https://res.cloudinary.com/dmhu2ksdk/image/upload/v1686131431/nft-card-game_jxgvr0.png',
      link: 'https://nft-card-game-lac.vercel.app',
      github: 'https://github.com/cryptnology/nft-card-game',
      demo: '',
    },
    {
      type: 'Project',
      title: 'GameHub',
      img: 'https://res.cloudinary.com/dmhu2ksdk/image/upload/v1686131431/game-hub_ytz1na.png',
      link: 'https://game-hub-ruddy.vercel.app/',
      github: 'https://github.com/cryptnology/game-hub',
      demo: 'u7ZVnRcIt1I',
    },
    {
      type: 'Featured Project',
      title: 'Novus Dex',
      summary:
        'A decentralised cryptocurrency exchange on the Goerli ethereum test network, where you can deposit, withdraw, make buy and sell orders, with mock tokens. All fully responsive with the choice of using a dark or light theme. The app is built using React, Zustand, Hardhat, Apex Charts, Framer Motion, Tailwind and coded in TypeScript.',
      img: 'https://res.cloudinary.com/dmhu2ksdk/image/upload/v1686131429/novus-dex_fjbv1b.png',
      link: 'https://novus-dex-vite.vercel.app',
      github: 'https://github.com/cryptnology/novus-dex-vite',
      demo: 'wtlPvjpizeA',
    },
    {
      type: 'Project',
      title: "Click 'n' Buy",
      summary: '',
      img: 'https://res.cloudinary.com/dmhu2ksdk/image/upload/v1686131432/click-n-buy_h7ya5w.png',
      link: 'https://ecommerce-app-sigma-seven.vercel.app',
      github: 'https://github.com/cryptnology/ecommerce-app',
      demo: 'tRIByfp0X-4',
    },
    {
      type: 'Project',
      title: "Pick 'n' Mix",
      summary: '',
      img: 'https://res.cloudinary.com/dmhu2ksdk/image/upload/v1686131431/pick-n-mix_gs6fr0.png',
      link: 'https://tshirt-threejs.vercel.app',
      github: 'https://github.com/cryptnology/tshirt-threejs',
      demo: 'rIfIhD4JliA',
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
      link: '__mSgDEOyv8',
      img: 'https://res.cloudinary.com/dmhu2ksdk/image/upload/v1686135513/nextjs13_gwvfxp.png',
    },
    {
      title: 'React.js 18 - Migrating from v17 or v16',
      summary: 'Learn about all the new features in React.js version 18.',
      amount: 15,
      link: 'bCZVos-yZXw',
      img: 'https://res.cloudinary.com/dmhu2ksdk/image/upload/v1686135513/reactjs18_jxhy5w.jpg',
    },
    {
      title: 'What is Web 3.0?',
      summary:
        'Learn about Web 3.0 and how it differs from the past versions of the internet.',
      amount: 9,
      link: 'nHhAEkG1y2U',
      img: 'https://res.cloudinary.com/dmhu2ksdk/image/upload/v1686135513/web3_zlic06.png',
    },
    {
      title: 'How does a blockchain work?',
      summary:
        'Learn what is a blockchain, how do they work and why blockchains are so special.',
      amount: 6,
      link: 'SSo_EIwHSd4',
      img: 'https://res.cloudinary.com/dmhu2ksdk/image/upload/v1686135513/blockchain_wl8w4v.png',
    },
  ],
  topics: [
    {
      title:
        'Learn about EVM-based Blockchain Development in this great playlist that covers all of the relevant topics you need to know.',
      amount: 35,
      amountText: '+ videos',
      link: 'XTbd5w0AXc4',
      img: 'https://res.cloudinary.com/dmhu2ksdk/image/upload/v1686135513/evm-development_n8fade.png',
    },
    {
      title:
        'Learn how to build a full decentralised app (DApp) using ChatGPT. Great introduction into ChatGPT and DApps.',
      amount: 20,
      link: 'i_a9bqvqmzo',
      img: 'https://res.cloudinary.com/dmhu2ksdk/image/upload/v1686135514/chat-gpt_jqe7dl.png',
    },
  ],
  metadata: {
    title: 'Cryptnology | Learning',
    description: 'Learning',
  },
};

export { homePage, aboutPage, projectsPage, learningPage, links, socialLinks };

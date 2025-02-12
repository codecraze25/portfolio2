import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import hulkCars from '@/public/hulk-cars.png';
import scribbleImg from '@/public/scribble.png';
import fjallravenImg from '@/public/fjallraven.png';
import juicedbikesImg from '@/public/juicedbikes.png';
import balitectureImg from '@/public/balitecture.png';
import outwetImg from '@/public/outwet.png';
import provisionImg from '@/public/provision.png';
import oblistImg from '@/public/oblist.png';
import royaImg from '@/public/roya.png';
import nomadicImg from '@/public/nomadic.png';
import columbiaImg from '@/public/columbia.png';
import albertsonImg from '@/public/albertson.png';

import ozdevsImg from '@/public/ozdevs-two.png';
import assetTradingImg from '@/public/asset-trading.jpg';
import euphorusImg from '@/public/euphorus-two.png';
import euphorusBackendImg from '@/public/euphorus-backend.png';
import techprowlImg from '@/public/techprowl-two.png';
import taskManagerImg from '@/public/task-manager.png';
import familyTreeImg from '@/public/bfsproject.jpg';
import binaryGameImg from '@/public//binary-game.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  // {
  //   name: 'Education',
  //   hash: '#education',
  // },
  // {
  //   name: 'Contact',
  //   hash: '#contact',
  // },
] as const;

export const experiencesData = [
  {
    title: 'Senior Software Engineer',
    location: 'Roya.com, LLC - Contract',
    description:
      'Developed and maintained complex web components, presentations, landing pages, and email elements, utilizing advanced JavaScript, APIs, analytics tools, and automation processes, while also mentoring new developers and ensuring thorough project documentation.',
    icon: React.createElement(CgWorkAlt),
    date: 'December 2024 - Current',
  },
  {
    title: 'Senior Full Stack Developer',
    location: 'Nomadic Insights, LLC',
    description:
      'Developed and maintained web applications using React, Angular, and React Native, integrating third-party APIs, implementing state management (Redux, MobX), and optimizing performance. Built reusable UI components with modern tools (Tailwind CSS, Bootstrap), ensured secure authentication (OAuth 2.0, JWT), and managed databases (MySQL, MongoDB). Utilized AWS cloud services, CI/CD pipelines, and integrated payment gateways (PayPal, Stripe) and messaging services (Twilio, Sendgrid).',
    icon: React.createElement(CgWorkAlt),
    date: 'March 2022 - November 2024',
  },
  {
    title: 'Senior Full Stack Developer',
    location: 'Trifork',
    description:
      'Architected and customized web applications with PHP, Node.js, and Ruby, optimizing databases (SQL/NoSQL) for large-scale apps. Managed deployment using Kubernetes and CI/CD pipelines, enhancing scalability and release cycles. Developed real-time data solutions with Apache Kafka, implemented end-to-end testing with Cypress and Jest, and improved SEO and performance with SSR. Utilized GCP for containerized app deployment and integrated Elasticsearch for fast, scalable search capabilities.',
    icon: React.createElement(CgWorkAlt),
    date: 'April 2019 - February 2022',
  },
  {
    title: 'Full Stack Developer',
    location: 'Apiko',
    description:
      'Utilized JSON for efficient data exchange, jQuery for DOM manipulation and AJAX requests, and developed full-stack applications using Laravel, Vue.js, and Python/Django. Implemented real-time communication with WebSockets, built dynamic UIs, and optimized CRUD operations with the MVC architecture. Conducted unit and integration testing with Jest and PHPUnit to improve code quality.',
    icon: React.createElement(CgWorkAlt),
    date: 'July 2016 - March 2019',
  },
] as const;

export const projectsData = [
  {
    title: 'Roya.com',
    description:
      'I’m building the Roya.com Marketing website using React for the frontend, Node.js for the backend, and deploying it on AWS to ensure scalability and performance.',
    tags: ['TypeScript', 'React', 'Node.js', 'AWS'],
    icons: [
      'logos:aws',
      'devicon:typescript',
      'logos:react',
      'logos:bootstrap',
      'logos:nodejs-icon',
    ],
    imageUrl: royaImg,
    urlLink: 'https://www.roya.com/',
  },
  {
    title: 'BALITECTURE',
    description:
      "Bali Tecture Realty is a real estate platform that offers comprehensive property listings, virtual tours, and detailed insights, helping buyers and investors make informed decisions in Bali's real estate market.",
    tags: ['TypeScript', 'React', 'Node.js', 'AWS'],
    icons: [
      'devicon:nextjs',
      'devicon:tailwindcss',
      'devicon:mongodb',
      'logos:aws',
    ],
    imageUrl: balitectureImg,
    urlLink: 'https://www.balitecturerealty.com/',
  },
  {
    title: 'Nomadic',
    description:
      'I developed the Nomadic Recruitment website using Laravel for the backend and Vue.js for the frontend, creating a seamless survey platform for user interactions and data collection.',
    tags: ['TypeScript', 'Tailwind CSS', 'React', 'Stripe'],
    icons: [
      'devicon:laravel',
      'logos:vue',
      'devicon:bootstrap',
      'logos:google',
    ],
    imageUrl: nomadicImg,
    urlLink: 'https://nomadicrecruitment.com/',
  },
  {
    title: 'OUTWET',
    description:
      'OutWet is an innovative online platform offering premium outdoor gear and apparel, designed to provide adventure enthusiasts with high-quality products for various outdoor activities.',
    tags: ['TypeScript', 'React', 'Node.js', 'AWS'],
    icons: ['devicon:javascript', 'logos:react', 'logos:nodejs-icon'],
    imageUrl: outwetImg,
    urlLink: 'https://www.outwet.it/',
  },

  {
    title: 'FJALL RAVEN',
    description:
      'I built this project using React. Fjällräven is a Swedish outdoor brand known for its durable, functional, and eco-friendly products, including backpacks, clothing, and accessories. The company emphasizes sustainability, using materials like organic cotton and recycled polyester.',
    tags: ['TypeScript', 'React', 'Node.js', 'AWS'],
    icons: [
      'logos:aws',
      'devicon:typescript',
      'logos:react',
      'logos:bootstrap',
      'logos:nodejs-icon',
    ],
    imageUrl: fjallravenImg,
    urlLink: 'https://www.fjallraven.com/us/en-us/',
  },
  {
    title: 'Scribble',
    description:
      'I built this project using React. Scribble Together offers a collaborative online whiteboard, ideal for remote tutoring, meetings, and shared note-taking. It supports handwriting, diagram drawing, PDF markup, and works well with iPads and Apple Pencils.',
    tags: ['TypeScript', 'Tailwind CSS', 'React', 'Stripe'],
    icons: [
      'devicon:typescript',
      'logos:react',
      'devicon:tailwindcss',
      'logos:stripe',
    ],
    imageUrl: scribbleImg,
    urlLink: 'https://scribbletogether.com/',
  },
  // {
  //   title: 'PROVISIONS',
  //   description: '',
  //   tags: ['TypeScript', 'React', 'Node.js', 'AWS'],
  //   icons: [
  //     'logos:aws',
  //     'devicon:typescript',
  //     'logos:react',
  //     'logos:bootstrap',
  //     'logos:nodejs-icon',
  //   ],
  //   imageUrl: provisionImg,
  //   urlLink: 'https://esprovisions.com/',
  // },
  // {
  //   title: 'Oblist',
  //   description:
  //     'Oblist is a streamlined online platform designed to help users easily create, share, and manage collaborative to-do lists and tasks, boosting productivity through simple, effective organization.',
  //   tags: [],
  //   icons: ['logos:shopify'],
  //   imageUrl: oblistImg,
  //   urlLink: 'https://oblist.com/',
  // },
] as const;

export const skillsData = [
  {
    name: 'JavaScript',
    icon: 'logos:javascript',
  },
  {
    name: 'TypeScript',
    icon: 'logos:typescript-icon',
  },
  {
    name: 'React',
    icon: 'logos:react',
  },
  {
    name: 'Node.js',
    icon: 'logos:nodejs-icon',
  },
  {
    name: 'PHP',
    icon: 'logos:php',
  },
  {
    name: 'Laravel',
    icon: 'logos:laravel',
  },
  {
    name: 'Symfony',
    icon: 'logos:symfony',
  },
  {
    name: 'Python',
    icon: 'logos:python',
  },
  {
    name: 'Java',
    icon: 'logos:java',
  },
  {
    name: 'HTML',
    icon: 'vscode-icons:file-type-html',
  },
  {
    name: 'CSS',
    icon: 'vscode-icons:file-type-css',
  },
  {
    name: 'SCSS',
    icon: 'logos:sass',
  },
  {
    name: 'Git',
    icon: 'logos:git-icon',
  },
  {
    name: 'MySQL',
    icon: 'logos:mysql',
  },
  {
    name: 'Linux',
    icon: 'flat-color-icons:linux',
  },
  {
    name: 'AWS',
    icon: 'logos:aws',
  },
  {
    name: 'Docker',
    icon: 'logos:docker-icon',
  },
  {
    name: 'Jenkins',
    icon: 'devicon:jenkins',
  },
  {
    name: 'Shopify',
    icon: 'logos:shopify',
  },
] as const;

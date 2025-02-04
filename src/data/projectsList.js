import bidstrocityImage from '../assets/images/bidstrocity.png';
import cctImage from '../assets/images/cct_screen.png';
import mibraryImage from '../assets/images/mibrary_screen.png';
import battleshipImage from '../assets/images/battleship_screen.png';
import mapattackImage from '../assets/images/mapattack.png';
import knightTravailsImage from '../assets/images/knightstravails.png';
import santaCarlaSurfImage from '../assets/images/santa-carla-surf-home.png';
import pokeCardImage from '../assets/images/pokecard.png';

const projects = [
  {
    id: 2,
    title: 'Case Crime Trace',
    description:
      "Case Crime Trace is my final project for Harvard's certified CS50 web programming course. A Django-based app that lets citizens and law enforcement report and track crimes and suspects. Features include real-time updates and user-specific tracking.",
    image: cctImage,
    live: 'https://cct.up.railway.app/',
    github: 'https://github.com/angelr1076/django-cct',
    builtWith: ['SiJavascript', 'SiPython', 'SiDjango'],
  },
  {
    id: 1,
    title: 'Mibrary',
    description:
      "Django Mibrary is my final project for Harvard's CS50 certified programming course, offering a platform where users can create profiles, manage books, and leave reviews. It integrates Bootstrap alerts with Django's built-in messaging, and leverages the Cloudinary API for image storage and ckeditor for rich-text book summaries.",
    image: mibraryImage,
    live: 'https://mibrary.up.railway.app/',
    github: 'https://github.com/angelr1076/django-mibrary',
    builtWith: ['SiJavascript', 'SiPython', 'SiDjango'],
  },
  {
    id: 10,
    title: 'Bidstrocity',
    description:
      'Bidstrocity is an eBay-like Django auction site designed for creating, managing, and bidding on listings. It allows users to comment on, watch, and close auctions while dynamically tracking bids and statuses in real-time.',
    image: bidstrocityImage,
    live: 'https://bidstrocity.up.railway.app/',
    github: 'https://github.com/angelr1076/commerce',
    builtWith: ['SiPython', 'SiDjango'],
  },
  {
    id: 7,
    title: 'Map Sync Pro',
    description:
      'Map Sync Pro is designed to streamline the integration of user data with geospatial mapping. The tool combines the precision of mapping technologies with the complexity of user-specific data, providing an intuitive interface for geographic and demographic analysis.',
    image:
      'https://res.cloudinary.com/angelrodriguez/image/upload/v1703191479/portfolio_2023/mapsyncshot.png', // Not stored locally
    live: 'https://mapsyncpro.pages.dev/',
    github: 'https://github.com/angelr1076/MapSyncPro',
    builtWith: ['SiJavascript', 'SiHere'],
  },
  {
    id: 5,
    title: 'Battleship',
    description:
      'Battleship, just like the classic board-game, features a smart AI opponent. Built using best practices like factory functions and module bundling via Webpack and Jest testing.',
    image: battleshipImage,
    live: 'https://battleship-boom.pages.dev/',
    github: 'https://github.com/angelr1076/Battleship',
    builtWith: ['SiJavascript', 'SiJest', 'SiBootstrap', 'SiWebpack'],
  },
  {
    id: 3,
    title: 'Map Attack',
    description:
      'Map Attack Remastered is a revamped programming boot-camp project that uses Google Maps APIs for interactive country location gaming. The update includes modularized functions, enhanced UI feedback, and a more responsive design using Flexbox and CSS Grid.',
    image: mapattackImage,
    live: 'https://mapattackremastered-production.up.railway.app/',
    github: 'https://github.com/angelr1076/MapAttackRemastered',
    builtWith: ['SiJavascript', 'SiGooglemaps'],
  },
  {
    id: 4,
    title: "Knight's Travails",
    description:
      "Knight's Travails uses a Breadth-First Search (BFS) algorithm to find the shortest path a chess knight can take between two squares on an 8x8 board. The function, knightMoves, outputs the squares the knight will land on along the way, treating the board as a 2D coordinate system that is interactive.",
    image: knightTravailsImage,
    live: 'https://angelr1076.github.io/Knight-Travails/',
    github: 'https://github.com/angelr1076/Knight-Travails',
    builtWith: ['SiJavascript'],
  },
  {
    id: 9,
    title: 'React Shopping Cart',
    description:
      'A simple shopping cart built with React that uses the Context API, React Router and FontAwesome.',
    image: santaCarlaSurfImage,
    live: 'https://santa-carla-surf.pages.dev/',
    github:
      'https://github.com/angelr1076/React-Shopping-Cart?tab=readme-ov-file',
    builtWith: ['FaReact', 'SiDotenv', 'SiVite'],
  },
  {
    id: 8,
    title: 'Poké Card',
    description:
      'This project is a modern, interactive memory card game built using React. Designed to be both engaging and visually appealing, it offers a fun and challenging way to test and improve your memory.',
    image: pokeCardImage,
    live: 'https://poke-cards.pages.dev/',
    github: 'https://github.com/angelr1076/MemoryCard',
    builtWith: ['FaReact', 'SiVite'],
  },
];

export default projects;

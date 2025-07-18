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
      'I built Case Crime Trace to give citizens a way to efficiently report and track local crimes. This Django app includes user authentication, real-time updates, and suspect reporting features to enhance community safety. Through this project, I strengthened my backend skills, particularly in Django models and authentication workflows. CCT is fronted by Cloudflare’s global network for SSL, caching, and rate-limited DDoS protection, while the core app is hosted on Railway.',
    image: cctImage,
    alt: 'Screenshot of Case Crime Trace Django app interface',
    live: 'https://crimetrace.online/',
    github: 'https://github.com/angelr1076/django-cct',
    builtWith: ['SiJavascript', 'SiPython', 'SiDjango'],
  },
  {
    id: 1,
    title: 'Mibrary',
    description:
      'I built Mibrary to manage my personal library and book reviews in one place. This Django app allows users to manage libraries, post rich-text reviews with CKEditor, and upload images via Cloudinary. I sharpened my skills in integrating third-party APIs and enhanced my skills in full-stack app deployment. Mibrary is served through Cloudflare with DDoS protection and SSL, reverse-proxied to Railway hosting.',
    image: mibraryImage,
    alt: 'Screenshot of Mibrary Django library management app',
    live: 'https://mibrary.online/',
    github: 'https://github.com/angelr1076/django-mibrary',
    builtWith: ['SiJavascript', 'SiPython', 'SiDjango'],
  },
  {
    id: 10,
    title: 'Bidstrocity',
    description:
      'I built Bidstrocity to understand auction logic by recreating an eBay-like bidding platform. This Django app lets users create, manage, and bid on listings with commenting and watchlist features. It deepened my knowledge of database relationships, models, and user session management in Django. The app is fronted by Cloudflare for added caching, SSL, and basic DDoS shielding, with the backend hosted on Railway.',
    image: bidstrocityImage,
    alt: 'Screenshot of Bidstrocity Django auction site',
    live: 'https://bidstrocity.online/',
    github: 'https://github.com/angelr1076/commerce',
    builtWith: ['SiPython', 'SiDjango'],
  },
  {
    id: 7,
    title: 'Map Sync Pro',
    description:
      'I built Map Sync Pro to integrate user data with geospatial mapping for visualization and analysis. This tool combines user-specific data with mapping technologies to provide geographic and demographic insights. It enhanced my geospatial mapping skills and API integration practices.',
    image:
      'https://res.cloudinary.com/angelrodriguez/image/upload/v1703191479/portfolio_2023/mapsyncshot.png',
    alt: 'Screenshot of Map Sync Pro geospatial mapping tool',
    live: 'https://mapsyncpro.pages.dev/',
    github: 'https://github.com/angelr1076/MapSyncPro',
    builtWith: ['SiJavascript', 'SiHere'],
  },
  {
    id: 5,
    title: 'Battleship',
    description:
      'I built Battleship to practice algorithm logic and DOM manipulation by recreating the classic game. It features a smart AI opponent, factory functions, Webpack module bundling, and Jest testing. This project improved my modular code design, testing, and bundling workflow skills.',
    image: battleshipImage,
    alt: 'Screenshot of Battleship JavaScript game board',
    live: 'https://battleship-boom.pages.dev/',
    github: 'https://github.com/angelr1076/Battleship',
    builtWith: ['SiJavascript', 'SiJest', 'SiBootstrap', 'SiWebpack'],
  },
  {
    id: 3,
    title: 'Map Attack',
    description:
      'I built Map Attack to enhance an older bootcamp project into a modular, responsive app. The remastered version uses Google Maps API integration, modularized functions, and responsive design with Flexbox and CSS Grid. It reinforced best practices in modular coding and responsive UI design.',
    image: mapattackImage,
    alt: 'Screenshot of Map Attack interactive Google Maps game',
    live: 'https://mapattackremastered.pages.dev/',
    github: 'https://github.com/angelr1076/MapAttackRemastered',
    builtWith: ['SiJavascript', 'SiGooglemaps'],
  },
  {
    id: 4,
    title: "Knight's Travails",
    description:
      "I built Knight's Travails to practice implementing search algorithms for pathfinding problems. It uses a Breadth-First Search (BFS) algorithm to find the shortest route a chess knight can take on an 8x8 board. This project enhanced my understanding of graph traversal algorithms and interactive visualizations.",
    image: knightTravailsImage,
    alt: "Screenshot of Knight's Travails chess algorithm visualizer",
    live: 'https://angelr1076.github.io/Knight-Travails/',
    github: 'https://github.com/angelr1076/Knight-Travails',
    builtWith: ['SiJavascript'],
  },
  {
    id: 9,
    title: 'React Shopping Cart',
    description:
      'I built React Shopping Cart to solidify my React state management and routing skills. It uses Context API for state management and React Router for navigation. This project deepened my practical understanding of React state patterns and modern build tools.',
    image: santaCarlaSurfImage,
    alt: 'Screenshot of React Shopping Cart project home page',
    live: 'https://santa-carla-surf.pages.dev/',
    github:
      'https://github.com/angelr1076/React-Shopping-Cart?tab=readme-ov-file',
    builtWith: ['FaReact', 'SiDotenv', 'SiVite'],
  },
  {
    id: 8,
    title: 'Poké Card',
    description:
      'I built Poké Card as a fun memory game to practice React component architecture. It is an interactive React-based memory card game with dynamic state updates and visual feedback. This project improved my React hooks knowledge and component re-rendering strategies.',
    image: pokeCardImage,
    alt: 'Screenshot of Poké Card React memory game project',
    live: 'https://poke-cards.pages.dev/',
    github: 'https://github.com/angelr1076/MemoryCard',
    builtWith: ['FaReact', 'SiVite'],
  },
];

export default projects;

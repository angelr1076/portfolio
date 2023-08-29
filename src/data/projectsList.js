const projects = [
  {
    key: 1,
    title: 'Battleship',
    description:
      'Experience a responsive, intuitive game with an interactive UI, clear in-game messaging, and a smart AI opponent, all built using best practices like factory functions and module bundling via Webpack and Jest testing.',
    image:
      'https://res.cloudinary.com/angelrodriguez/image/upload/v1692116373/portfolio_2023/battleship_screen.png',
    live: 'https://battleship-boom.netlify.app/',
    github: 'https://github.com/angelr1076/Battleship',
    builtWith: ['SiJavascript', 'SiJest', 'SiBootstrap', 'SiWebpack'],
  },
  {
    key: 2,
    title: 'Weather App',
    description:
      'Featuring daily and five-day forecasts with unique weather icons and temperature toggles, this app uses modern tech like Async/Await, Webpack, and various APIs, and even offers a dark/light theme switch.',
    image:
      'https://res.cloudinary.com/angelrodriguez/image/upload/v1692116373/portfolio_2023/weather__screen.png',
    live: 'https://odin-weatherly.netlify.app/',
    github: 'https://github.com/angelr1076/Weather-App',
    builtWith: ['SiJavascript', 'SiDotenv', 'SiBootstrap', 'SiWebpack'],
  },
  {
    key: 3,
    title: 'Map Attack',
    description:
      'Map Attack Remastered is a revamped boot-camp project that uses Google Maps APIs for interactive country locations. The update includes modularized functions, enhanced UI feedback, and a more responsive design using Flexbox and CSS Grid.',
    image:
      'https://res.cloudinary.com/angelrodriguez/image/upload/v1693256876/mapattack.png',
    live: 'https://mapattackre.netlify.app/',
    github: 'https://github.com/angelr1076/MapAttackRemastered',
    builtWith: ['SiJavascript', 'SiGooglemaps'],
  },
  {
    key: 4,
    title: "Knight's Travails",
    description:
      'Knights Travails uses a Breadth-First Search (BFS) algorithm to find the shortest path a chess knight can take between two squares on an 8x8 board. The function, knightMoves, outputs the squares the knight will land on along the way, treating the board as a 2D coordinate system.',
    image:
      'https://res.cloudinary.com/angelrodriguez/image/upload/v1693256876/knightstravails.png',
    live: 'https://angelr1076.github.io/Knight-Travails/',
    github: 'https://github.com/angelr1076/Knight-Travails',
    builtWith: ['SiJavascript'],
  },
  {
    key: 5,
    title: 'Case Crime Trace',
    description:
      'Case Crime Trace is a Django-based, mobile-responsive app that lets users and law enforcement report and track crimes and suspects. Features include real-time updates, user-specific tracking, and a well-organized, modular codebase.',
    image:
      'https://res.cloudinary.com/angelrodriguez/image/upload/v1692116373/portfolio_2023/cct_screen.png',
    live: 'https://cct.up.railway.app/',
    github: 'https://github.com/angelr1076/django-cct',
    builtWith: ['SiJavascript', 'SiPython', 'SiDjango'],
  },
  {
    key: 6,
    title: 'Mibrary',
    description:
      "Django Mibrary is my final project for CS50, offering a platform where users can create profiles, manage books, and leave reviews. It uses both function and class-based views, integrates Bootstrap alerts with Django's built-in messaging, and leverages the Cloudinary API for image storage and ckeditor for rich-text book summaries. Hosted on Railway.",
    image:
      'https://res.cloudinary.com/angelrodriguez/image/upload/v1692116373/portfolio_2023/mibrary_screen.png',
    live: 'https://mibrary.up.railway.app/',
    github: 'https://github.com/angelr1076/django-mibrary',
    builtWith: ['SiJavascript', 'SiPython', 'SiDjango'],
  },
];

export default projects;

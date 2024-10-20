import githubLogo from '../assets/images/GitHub_Logo_White.png';
import climateRecording from '../assets/videos/screen-recording.mp4';
import weatherRecording from '../assets/videos/weather-recording.mp4';
import vigenereRecording from '../assets/videos/vigenere-recording.mp4';

export const introductionData = {
    greeting: "Hi, I'm Nika!",
    introduction: `I am a software engineer. 
     My interest lies in finding ways to make living more sustainable and less intrusive. 
     I am having fun in React and RESTing in between.`
 };

export const skillsData = {
    javascript: {
        name: 'JavaScript',

        image: 'https://cdn.iconscout.com/icon/free/png-256/free-javascript-2038874-1720087.png'
    },
    typescript: {
        name: 'TypeScript',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png'
    },
    python: {
        name: 'Python',
        image: 'https://docs.python.org/3/_static/py.svg'
    },
    git: {
        name: 'Git',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png'
    },
    react: {
        name: 'React',
        image: 'https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-svg-vector.svg'
    },
    css: {
        name: 'CSS',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png'
    },
    express: {
        name: 'Express',
        image: 'https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png'
    },
    mongoose: {
        name: 'Mongoose',
        image: 'https://cdn-images-1.medium.com/max/449/1*NRCOyVBY6Jiqr4Q9A1zoaQ.png'
    },
 };

export const projectsData = {
    0: {
        title: "Climate View MERN stack",
        githubLink: "https://github.com/kweeuhree/climate-view",
        liveLink: 'https://climate-view-1.onrender.com/',
        video: climateRecording,
        details: [`An overview of Earth's climate state as of 2024`, 
        `It is a full MERN stack application where users can create an account and leave comments once logged in.`,
        `Mongo provides persistence for user and comments data.`,
        `The website includes animations, gifs and a video sourced mostly from NASA.`, 
        `Animations are achieved through state management, and custom useIntersectionObserver hook.`,
         `'History' section involves data fetching and will display historical climate data.`]
    }, 
    1: {
        title: "Weather App in React.js",
        githubLink: "https://github.com/firstnamenika/weather-app",
        video: weatherRecording,
        details: [`A weather app that fetches data from a third party api and displays it on a screen`, 
        `The website will display user's location based on their browser's location navigator.`,
        `A user can add a location to favorites, favorite locations 
        are displayed on screen on the left side. Up to 5 favorite locations can 
        be added. Favorite locations can be removed by clicking on a heart next 
        to locations name and temperature.`, 
        `Fetched data includes hourly weather, sunrise and sunset information, 
        as well as humidity, wind, precipitation and UV index information.`]
    },
    2: {
        title: "Vigenere Cipher in Python",
        githubLink: "https://github.com/kweeuhree/vigenere",
        video: vigenereRecording,
        details: [`This Python script allows to encode or decode messages using a keyword-based cipher. 
        It provides a command-line interface for user interaction`,
        `Encoding and Decoding: Choose between encoding and decoding a message.`,
        `Keyword Input: Enter a keyword to modify the encoding pattern.`,
        `Interactive Interface: Continuously prompts the user for new messages until they choose to exit.`,
        `To run this program, users will need a Python-friendly environment.`]
    }, 
    3: {
        title: "Towers Of Hanoi in Python",
        githubLink: "https://github.com/firstnamenika/towers-of-hanoi",
        image: "https://raw.githubusercontent.com/firstnamenika/firstnamenika.github.io/main/images/towers-of-hanoi-python.png",
        details:[`Python implementation of Towers of Hanoi game`, 
        `Goal of this project is to apply knowledge of stacks and linked list data structures.`, 
        `Working on this project has been valuable, as I was able to practice my skills in building classes.` ]
    }
 };

 const otherProjects = {
    0: {
        title: "Rock Paper Scissors React.js App",
        githubLink: "https://github.com/firstnamenika/rock-paper-scissors",
        image: "https://raw.githubusercontent.com/firstnamenika/firstnamenika.github.io/main/images/rock-paper-scissors.png",
        details: `The task was to create an app entirely from scratch. 
        I picked React to be able to manage states of styles of play cards and game result. 
        I had some basic JavaScript code that I reworked into React and styled with vanilla CSS.`
    }
 }

export const symbols = {
    forward:`❯`,
    backward: '❮',
    northEast: '⇗',
    copyright: '©',
    closeButton: '⛒'
}; 

export const contactsData = {
    email: 'firstnamenika@gmail.com',
    currentGithub: {
        logo: githubLogo, 
        url:"https://github.com/kweeuhree"
    },
    github: {
        logo: githubLogo,
        url:"https://github.com/firstnamenika"

    },
    linkedIn: {
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg",
        url: 'https://www.linkedin.com/in/vekolesnikova/'
    }
};


import techstackMobile from "/projects/techstackMobile.png"
import deepspeakMobile from "/projects/deepspeakMobile.png"
import memescapeMobile from "/projects/memescapeMobile.png"
import flashmodeMobile from "/projects/flashmodeMobile.png"

export default [
  {
    title: "FlashMode",
    tech: [
      "Django",
      "django-allauth",
      "Django Cotton",
      "HTMX",
      "Alpine.js",
      "Tailwind",
      "DaisyUI",
      "PostgreSQL",
      "Factory Boy",
      "unittest",
    ],
    deployment: "https://flashmode.fly.dev/",
    thumbnails: {
      desktop:
        "https://github.com/DavidSemke/FlashMode/raw/main/documentation" +
        "/index-page.png?raw=true",
      mobile: flashmodeMobile,
    },
    description:
      "FlashMode is a Django app that offers user-made flash card decks for studying. " +
      "Django templates use DaisyUI + Tailwind for styling and HTMX + Alpine.js for AJAX and interactivity. " +
      "The backend uses a PostgreSQL database and authentication is handled by django-allauth. " +
      "Users can search for, collect, create, and share flash card decks, as well as track their progress " +
      "with statistics. " +
      "Unit tests are written using unittest and Factory Boy is used for test data generation.",
  },
  {
    title: "Memescape",
    tech: [
      "Next.js",
      "React.js",
      "Auth.js",
      "Tailwind",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "Jest",
      "React Testing Library",
    ],
    deployment: "https://memescape.vercel.app/",
    thumbnails: {
      desktop:
        "https://github.com/DavidSemke/Memescape/raw/main/documentation" +
        "/index-page.png?raw=true",
      mobile: memescapeMobile,
    },
    description:
      "Memescape is a Next.js app for finding, creating, and sharing memes. " +
      "The React + Tailwind frontend is fully responsive and was developed using mobile-first design. " +
      "The backend consists of a PostgreSQL database and an API abstracted with the use of " +
      "Next.js server actions. Users can search for, bookmark, create, and share memes, " +
      "where some actions require authentication and authorization via Auth.js. " +
      "Unit tests are written using Jest and the React Testing Library.",
  },
  {
    title: "DeepSpeak",
    tech: [
      "React.js",
      "React Bootstrap",
      "SASS",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "Jest",
      "REST API",
      "Socket.io",
    ],
    deployment: "https://davidsemke.github.io/DeepSpeak/",
    thumbnails: {
      desktop:
        "https://github.com/DavidSemke/DeepSpeak/raw/main/documentation" +
        "/index-page.png?raw=true",
      mobile: deepspeakMobile,
    },
    description:
      "DeepSpeak is a messaging app where users can enter rooms and chat " +
      "with other users anonymously. The frontend was designed with React and React " +
      "Bootstrap using mobile-first development for a responsive experience, " +
      "and the backend is a REST API made with Express and MongoDB. Jest is used " +
      "to test routes and JSON web tokens allow stateless sessions. Rooms in a " +
      "complete production environment are deleted after 24 hours, but since this " +
      "hinders a demonstration, rooms are currently not being deleted.",
  },
  {
    title: "Tech Stack",
    tech: [
      "JavaScript",
      "SASS",
      "Pug",
      "TinyMCE",
      "Webpack",
      "Express.js",
      "MongoDB",
      "Jest",
    ],
    deployment: "https://techstack.fly.dev/",
    thumbnails: {
      desktop:
        "https://github.com/DavidSemke/TechStack/raw/main/documentation" +
        "/index-page.png?raw=true",
      mobile: techstackMobile,
    },
    description:
      "Tech Stack is a place for reading and writing blog posts for " +
      "coders and tech enthusiasts. It is a fully responsive web app with " +
      "authentication, authorization, user profiles, blog post management, " +
      "commenting, and a search system. The frontend relies on server-side " +
      "rendering via Pug, and the backend uses Express with MongoDB. Jest is " +
      "used for thorough unit tests on backend routes. It is currently being " +
      "used to host some blog posts of my own, which talk about my approach " +
      "to programming with different technologies (feel free to check them out).",
  },
]

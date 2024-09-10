import techstackMobile from "/techstackMobile.png"
import deepspeakMobile from "/deepspeakMobile.png"
import memescapeMobile from "/memescapeMobile.png"

export default [
  {
    title: "Memescape",
    tech: [
      "Vercel",
      "Next.js",
      "React.js",
      "Tailwind",
      "TypeScript",
      "PostgreSQL",
      "Auth.js"
    ],
    deployment: "https://memescape-lj1zk54es-davsems-projects.vercel.app/",
    thumbnails: {
      desktop:
        "https://github.com/DavidSemke/Memescape/raw/main/documentation" +
        "/index-page.png?raw=true",
      mobile: memescapeMobile,
    },
    description:
      "Memescape is a Next.js app for finding, creating, and sharing memes. "
      + "The React + Tailwind frontend is fully responsive and was developed using mobile-first design. "
      + "The backend consists of a PostgreSQL database and an API abstracted with the use of "
      + "Next.js server actions. Users can search for, bookmark, create, and share memes, "
      + "where some actions require authentication and authorization via Auth.js."
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
      "Socket.io"
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
  }
]
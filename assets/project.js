import {
    DiNodejs,
    DiMongodb,
    DiBootstrap,
    DiHtml5,
    DiGit,
    DiSass,
    DiCss3
} from "react-icons/di";
import { SiFirebase, SiNextdotjs, SiRedux, SiExpress, SiJavascript, SiReact } from "react-icons/si";

const course = [
    {
        id: 1,
        imgPath: "./blog.png",
        isBlog: false,
        title: "Blog Time Application",
        description: "It's a Full-Stack blog application where an user can publish his/her blogs and also can perform some other functionalities. This project made with MERN stack technologies.",
        link: "https://shielded-anchorage-62161.herokuapp.com/",
        fgithub: "https://github.com/Protik111/blog-time-app",
        bgithub: "https://github.com/Protik111/blog-time-app",
        both: false,
        stack: [DiNodejs, DiMongodb, SiReact, SiExpress, SiRedux]
    },
    {
        id: 2,
        imgPath: "./bishuddho.png",
        isBlog: false,
        title: "Bishuddho Bazar",
        description: "This is an eCommerce web application created with Next.js framework. It has user authentication system, an user can add new products in his/her cart. can make order and with his/her account. It's a Full-Stack eCommerce web application with many functionalities. It is build with Next.js framework.",
        link: "https://bishuddho-bazar.herokuapp.com/",
        fgithub: "https://github.com/Protik111/bishuddho-bazar",
        bgithub: "https://github.com/Protik111/bishuddho-bazar",
        both: false,
        stack: [DiNodejs, DiMongodb, SiNextdotjs, SiExpress]
    },
    {
        id: 3,
        imgPath: "./marshmallow.png",
        isBlog: false,
        title: "Marshmallow Agency",
        description: "It is an agency website, which serves some services like Saving Strategy, Design And Development, Integrated Marketing, Digital Strategy etc. In this website, two types of people can log in or sign up here. One is admin and another is user. One cannot go to the dashboard page without login.",
        link: "https://marshmallow-agency.web.app/",
        fgithub: "https://github.com/Protik111/marshmallow-agency-client",
        bgithub: "https://github.com/Protik111/marshmallow-agency-server",
        both: true,
        stack: [SiReact, DiNodejs, DiMongodb, SiExpress, SiFirebase]
    },
    {
        id: 4,
        imgPath: "./quiz.png",
        isBlog: false,
        title: "Quiz App",
        description: "It is a quiz based web application to test knowledge. Anyone can test his/her knowledge in Animal, Computers, Gadget, History, Mathmatics, Geography, Musical, Mythodology topics. In this application question data fetched from Trivia Api.",
        link: "https://vigilant-bohr-00ef18.netlify.app/",
        fgithub: "https://github.com/Protik111/quiz-app",
        bgithub: "https://github.com/Protik111/quiz-app",
        both: false,
        stack: [SiReact, SiRedux, DiBootstrap, DiHtml5, DiSass]
    },
    {
        id: 5,
        imgPath: "./todo.png",
        isBlog: false,
        title: "Todo App",
        description: "Make ToDos is a simple web application to save Your daily tasks in order not to miss anything. It's a simple todo application that can perform crud operation made with React.js. Features like picking a date from calender, time, next seven days todos, deleting todos from list are implemented",
        link: "https://vibrant-allen-7e0f53.netlify.app/",
        fgithub: "https://github.com/Protik111/make-todos",
        bgithub: "https://github.com/Protik111/make-todos",
        both: false,
        stack: [SiReact, DiBootstrap, DiHtml5, DiCss3]
    },
    {
        id: 6,
        imgPath: "./lyrics.png",
        isBlog: false,
        title: "Lyrics App",
        description: "It's a simple DOM project made with simple html and css. Songs' Lyrics fetch from lyrics api. User can search a song or artist to find his/her desired list and then get the lyrics.",
        link: "https://protik111.github.io/Hard-Rock-Lyrics/",
        fgithub: "https://github.com/Protik111/Hard-Rock-Lyrics",
        bgithub: "https://github.com/Protik111/Hard-Rock-Lyrics",
        both: false,
        stack: [DiHtml5, DiCss3, DiBootstrap]
    },
]

export default course;
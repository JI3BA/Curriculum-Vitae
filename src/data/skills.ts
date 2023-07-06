import { Skill } from "../interfaces/Skill"
import memoryGame from "../images/projects/memory-game/memory-game__game.png"
import weather from "../images/projects/weather/weather.png"
import todo from "../images/projects/todo/todo.png"
import cv from "../images/projects/cv/cv.png"
import fish from "../images/projects/fish/fish.png"

const skills: Skill[] = [
    {
        id: 1,
        name: "Memory Game",
        description: "Simple memory game where a player needs to find a pair for each card for the minimal time. Player can choose difficulty level (number of unique cards): easy - 4, medium - 6, hard - 9. Player can save his time and nickname to the results table.",
        stack: "HTML, CSS, JavaScript, React, React Hooks, Redux, Redux Toolkit, Redux-persist, React-Router-Dom",
        picture: `${memoryGame}`,
        link: 'https://github.com/JI3BA/MemoryGame',
    },
    {
        id: 2,
        name: "Weather",
        description: "Weather application for displaying information about weather for the entered city.",
        stack: "HTML, CSS, TypeScript, React, Axios, React Hooks, Redux, Redux Thunk",
        picture: `${weather}`,
        link: 'https://github.com/JI3BA/weather',
    },
    {
        id: 3,
        name: "ToDo list with hashtags",
        description: "ToDo application for writing your thoughts.",
        stack: "HTML, CSS, TypeScript, React, React Hooks",
        picture: `${todo}`,
        link: 'https://github.com/JI3BA/test-todo-app',
    },
    {
        id: 4,
        name: "CV",
        description: "My Curriculum Vitae for my future work.",
        stack: "HTML, CSS (SCSS), TypeScript, React, React Hooks",
        picture: `${cv}`,
        link: 'https://github.com/JI3BA/Curriculum-Vitae',
    },
    {
        id: 5,
        name: "Fish shop",
        description: "Online shop for buy fresh fish.",
        stack: "HTML, CSS (SCSS), TypeScript, React, React Hooks, Redux, Redux Toolkit, Webpack",
        picture: `${fish}`,
        link: 'https://github.com/JI3BA/Fish',
    }
]

export default skills
import libraryImg from "./projects_img/pr-1.png"
import formImg from "./projects_img/pr-2.png"
import dashBoardImg from "./projects_img/dashboard.png"
import hangmanImg from "./projects_img/hangman-preview.gif"
import ageCalcImg from "./projects_img/age-calc.png"
export default 
    [
        {
            name: "Library",
            img: libraryImg,
            info: "Library app which dynamically searches for entered inputs and finds the correct title, author name and cover image.",
            skills: ["React", "JavaScript", "HTML", "CSS"]
        },
        {
            name: "Modern Form",
            img: formImg,
            info: "Four steps form done as part of frontendmentor challanges. Uses prop drilling to pass data from all the different states of the form.",
            skills: ["React", "JavaScript", "HTML", "CSS"]
        },
        {
            name: "Hangman",
            img: hangmanImg,
            info: "Classic hangman game with few letters already guessed to make game slightly easier. ",
            skills: ["React", "TypeScript", "HTML", "CSS"]
        },
        {
            name: "Dashboard",
            img: dashBoardImg,
            info: "Frontendmentor challenge. Uses CSS grid for the layout and avaible with dark and light theme.",
            skills: ["HTML", "CSS"]
        },
        {
            name: "Age-Caclucator",
            img: ageCalcImg,
            info: "Calculates age based on the enetered input. Used CSS position property and flexbox for the layout. Error handling not implemented yet.",
            skills: ["HTML", "CSS", "JavaScript"]
        }    
    ]
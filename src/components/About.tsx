import "./about.css"
import profileImg from "../assets/photo_gallery/mohit.png"
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";


const About = ({darkMode}: {darkMode: boolean}) => {

    useGSAP(() => {
        gsap.to(".about-heading", {
            delay: 1,
            opacity: 1,
        }),
        gsap.to(".about-text", {
            delay: 2,
            opacity: 1,
        })
    }, [])

    return (
        <>
            <div className={`about-section ${darkMode && "dark"}`}>
                <img src={profileImg} width={400} alt="Mohit Yadav profile photo"/>
                <h1 className="about-heading title">
                    Mohit Yadav<br />
                    <span>Software Developer</span>
                    <hr className={darkMode ? "dark" : ""}/>
                </h1>
                <p className="about-text">
                    Experienced software developer proficient in React, Node.js, and other front-end frameworks.
                    Skilled in building user-friendly front-end interfaces with React and developing scalable
                    server-side applications. Strong problem-solving abilities and a commitment to clean,
                    maintainable code. Collaborative team player with excellent communication skills.
                </p>
            </div>
        </>
    )
}

export default About
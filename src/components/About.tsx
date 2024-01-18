import "./about.css"
const About = () => {
    return (
        <>
            <div className="about-section">
                <img src="/mohit.png" width={400} alt="Mohit Yadav"/>
                <h1 className="about-heading title">
                    Mohit yadav<br />
                    <span>Software developer</span>
                    <hr />
                </h1>
                <p className="about-text">
                    Experiennced software developer proficient in React, Node.js, and Python frameworks.
                    Skilled in building user-friendly front-end interfaces with React and developing scalable
                    server-side applications. Strong problem-solving abilities and a commitment to clean,
                    maintainable code. Collaborative team player with excellent communication skills.
                </p>
            </div>
        </>
    )
}

export default About
import "./project.css"
import githubImg from "../assets/projects_img/github-mark.svg"
import liveImg from "../assets/projects_img/live-link.svg"
import darkGithubImg from "../assets/projects_img/github-mark-dark.svg"
import darkLiveImg from "../assets/projects_img/live-link-dark.svg"

interface ProjectProps {
    projectName: string
    projectImage: string
    projectInfo: string
    skills: string[]
    github: string
    live: string
    darkMode: boolean
}

const Project = ({projectName, projectImage, projectInfo, skills, github, live, darkMode}: ProjectProps) => {
    return (
        <div className={`project ${darkMode ? "dark" : ""}`}>
            <img src={projectImage} alt={`${projectName} screenshot image`}/>
            <div className="skills">
                {skills.map((skill) => {
                    return (
                        <span className={skill.toLowerCase()}>{skill}</span>
                    )
                })}
            </div>
            <div className="project-description">
                <h2>{projectName}</h2>
                <hr />
                <p>{projectInfo || "No info"}</p>
            </div>
            <div className="project-links">
                <a href={github} target="_blank"><img src={darkMode ? darkGithubImg : githubImg} alt="" /></a>
                {live && <a href={live} target="_blank"><img src={darkMode ? darkLiveImg : liveImg} alt="" /></a>}
            </div>
        </div>
    )
}

export default Project
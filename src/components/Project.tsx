import "./project.css"

interface ProjectProps {
    projectName: string
    projectImage: string
    projectInfo: string
    skills: string[]
}

const Project = ({projectName, projectImage, projectInfo, skills}: ProjectProps) => {
    return (
        <div className="project">
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
                <p>{projectInfo || "No info"}</p>
            </div>
        </div>
    )
}

export default Project
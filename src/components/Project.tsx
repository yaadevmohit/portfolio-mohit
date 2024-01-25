import "./project.css"

interface ProjectProps {
    projectName: string
    projectImage: string
    projectInfo: string
}

const Project = ({projectName, projectImage, projectInfo}: ProjectProps) => {
    return (
        <div className="project">
            <img src={`/projects_img/${projectImage}.png`} alt="project"/>
            <div className="skills">
                <span className="react">React</span>
                <span className="javascript">JavaScript</span>
                <span className="tailwind">Tailwind</span>
                <span className="python">Python</span>
            </div>
            <div className="project-description">
                <h2>{projectName}</h2>
                <p>{projectInfo || "No info"}</p>
            </div>
        </div>
    )
}

export default Project
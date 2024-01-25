import Project from "./Project"
import projectsData from "../assets/projectData"
import "./projects.css"


const Projects = () => {
    return(
        <div className="projects">
            {
                projectsData.map(data => {
                    return(
                        <Project 
                            projectName={data.name}
                            projectInfo={data.info}
                            projectImage={data.img}
                            skills={data.skills}
                        />
                    )
                })
            }
        </div>
    )
}

export default Projects
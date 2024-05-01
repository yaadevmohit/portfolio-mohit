import Project from "./Project"
import projectsData from "../assets/projectData"
import "./projects.css"


const Projects = ({darkMode}: {darkMode: boolean}) => {

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
                            github={data.github}
                            live={data.live}
                            darkMode={darkMode}
                        />
                    )
                })
            }
        </div>
    )
}

export default Projects
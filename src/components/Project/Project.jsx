import React from "react";
import * as projects_json from './projects.json'

const Project = () => {
  const renderTag = (tag) => (
    <li>{tag}</li>
  )

  const renderProject = (project) => (
    <div className="project">
      <div className="project-image">
        <img src={project.image_url} alt={project.company_name}/>
      </div>
      <div className="project-text">
        <h3 className="project-title">{`${project.company_name} - ${project.name}`}</h3>
        <p>{project.description}</p>
        <ul className="project-tags">
          {project.tags.map((tag) => renderTag(tag))}
        </ul>
        <div className="project-links">
          <a href={project.source_code}>Source code</a>
        </div>
      </div>
    </div>
  )  

  const projectListInChunks = (projects) => {
    const perChunk = 3 

    return projects.reduce((projects, item, index) => { 
      const chunkIndex = Math.floor(index/perChunk)

      if(!projects[chunkIndex]) {
        projects[chunkIndex] = []
      }

      projects[chunkIndex].push(item)

      return projects
    }, [])
  }

  const renderProjects = projects_json.projects.map((category) => (
    <section id={category.name} className="container">
      <h2 className="subsection-title">
        {category.name}
      </h2>
      {
        projectListInChunks(category.project_list).map(
          (projectGroup) => (
            <div className="main-text project-scroll">
              {projectGroup.map((project) => renderProject(project))}
            </div>
          )
        )
      }
    </section>
  ))

  return(
    <>
      <section className="container">
        <h1 className="section-tile">Projects <span className="title-icon">&#128187;</span></h1>
        <p>
          Over the course of my career as a full-stack developer, I've built several websites, applications & open-source. 
          These are most of them: 
        </p>
      </section>
      {renderProjects}
    </>
  )
}

export default Project;
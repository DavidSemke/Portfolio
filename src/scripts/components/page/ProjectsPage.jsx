import projects from "../../data/projectData"
import Project from "../layout/Project"

function ProjectsPage() {
  return (
    <main className="page">
      <h1>Projects</h1>
      {projects.map((project) => {
        return <Project key={project.title} {...project} />
      })}
    </main>
  )
}

export default ProjectsPage

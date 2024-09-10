import projects from "../../data/projectData"
import ProjectView from "../view/ProjectView"

export default function ProjectsPage() {
  return (
    <main className="flex flex-col gap-8">
      <h1 className="text-center">Projects</h1>
      {projects.map((project) => {
        return <ProjectView 
          key={project.title} 
          {...project} 
        />
      })}
    </main>
  )
}
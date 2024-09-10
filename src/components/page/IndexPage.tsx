import { Link } from "react-router-dom"

export default function IndexPage() {
  return (
    <main className="flex flex-col items-center justify-center gap-8 pb-20">
      <h1 className="py-4 text-center bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">Hi! I'm David, a Full Stack Developer.</h1>
      <h2 className="text-center">
        Check out my&nbsp;
        <Link to="/projects" className="link">
          projects
        </Link>
        &nbsp;or&nbsp;
        <a href="https://techstack.fly.dev/" className="link">
          blog posts
        </a>
        !
      </h2>
    </main>
  )
}

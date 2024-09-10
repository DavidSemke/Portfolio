import { Link } from "react-router-dom"

export default function IndexPage() {
  return (
    <main className='flex flex-col justify-center items-center gap-8 pb-20'>
      <h1 className="text-center">Hi! I'm David, a Full Stack Developer.</h1>
      <p>
        Check out my&nbsp;
        <Link to="/projects" className="link">projects</Link>
        &nbsp;or&nbsp;
        <a href="https://techstack.fly.dev/" className="link">blog posts</a>!
      </p>
    </main>
  )
}
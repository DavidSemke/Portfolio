import { Link } from "react-router-dom"
import selfPortrait from "/selfPortrait.jpeg"
import githubIcon from "/githubIcon.png"
import linkedinIcon from "/linkedinIcon.png"

export default function Navbar() {
  return (
    <section className='shrink-0 bg-base-300 w-full text-xl sm:sticky sm:top-0 lg:w-[--navbar-width-lg]'>
      <div className='flex flex-col gap-4 p-4 sm:flex-row sm:gap-0 sm:p-2 lg:flex-col lg:p-4 lg:gap-4 lg:sticky lg:top-0'>
        <section className='flex flex-col items-center gap-2 pb-4 border-b-2 border-accent sm:grow sm:flex-row-reverse sm:justify-center sm:pb-0 sm:border-b-0 sm:border-e-2 lg:border-e-0 lg:border-b-2 lg:pb-4 lg:flex-col'>
          <div className='flex flex-col items-center text-2xl sm:flex-row sm:text-xl sm:gap-2 lg:flex-col'>
            <img src={selfPortrait} className='w-40 rounded-full sm:w-20 lg:w-40' />
            <div className="text-center sm:text-left lg:text-center">
              <div>David Semke</div>
              <div>david@semke.ca</div>
            </div>
          </div>
          <div className='flex justify-center gap-4 sm:flex-col sm:gap-2 lg:flex-row lg:gap-4'>
            <a href="https://github.com/DavidSemke">
              <img src={githubIcon} className='w-8 h-8' />
            </a>
            <a href="https://www.linkedin.com/in/david-semke-5babbb203/">
              <img src={linkedinIcon} className='w-8 h-8' />
            </a>
          </div>
        </section>
        <nav className="flex justify-center items-start gap-4 pb-4 border-b-2 border-accent sm:grow sm:items-center sm:pb-0 sm:border-b-0 lg:flex-col lg:gap-0 lg:items-start">
          <Link to={"/"} className="link">Home</Link>
          <Link to={"/projects"} className="link">Projects</Link>
          <Link to={"/contact"} className="link">Contact Me</Link>
        </nav>
      </div>
    </section>
  )
}
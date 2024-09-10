import { Link, useLocation } from "react-router-dom"
import selfPortrait from "/selfPortrait.jpeg"
import githubIcon from "/githubIcon.png"
import linkedinIcon from "/linkedinIcon.png"
import clsx from "clsx"

export default function Navbar() {
  const { pathname } = useLocation()
  const links = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Projects",
      url: "/projects",
    },
    {
      title: "Contact Me",
      url: "/contact",
    },
  ]

  return (
    <section className="w-full shrink-0 bg-base-300 text-xl sm:sticky sm:top-0 lg:w-[--navbar-width-lg]">
      <div className="flex flex-col gap-4 p-4 sm:flex-row sm:gap-0 sm:p-2 lg:sticky lg:top-0 lg:flex-col lg:gap-4 lg:p-4">
        <section className="flex flex-col items-center gap-2 border-b-2 border-accent pb-4 sm:grow sm:flex-row-reverse sm:justify-center sm:border-b-0 sm:border-e-2 sm:pb-0 lg:flex-col lg:border-b-2 lg:border-e-0 lg:pb-4">
          <div className="flex flex-col items-center text-2xl sm:flex-row sm:gap-2 sm:text-xl lg:flex-col">
            <img
              src={selfPortrait}
              className="w-40 rounded-full sm:w-20 lg:w-40"
            />
            <div className="text-center sm:text-left lg:text-center">
              <div>David Semke</div>
              <div>david@semke.ca</div>
            </div>
          </div>
          <div className="flex justify-center gap-4 sm:flex-col sm:gap-2 lg:flex-row lg:gap-4">
            <a href="https://github.com/DavidSemke">
              <img src={githubIcon} className="h-8 w-8" />
            </a>
            <a href="https://www.linkedin.com/in/david-semke-5babbb203/">
              <img src={linkedinIcon} className="h-8 w-8" />
            </a>
          </div>
        </section>
        <nav className="flex items-start justify-center gap-4 border-b-2 border-accent pb-4 sm:grow sm:items-center sm:border-b-0 sm:pb-0 lg:flex-col lg:items-start lg:gap-0">
          {links.map((link) => (
            <Link
              key={link.title}
              to={link.url}
              className={clsx("link", {
                underline: link.url === pathname,
              })}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  )
}

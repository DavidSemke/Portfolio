import { Link } from "react-router-dom"
import RoundedCarousel from "../carousel/RoundedCarousel"
import carouselCardData from "../../data/indexData"

export default function IndexPage() {
  return (
    <main className="flex flex-col items-center justify-center gap-8 pb-20">
      <h1 className="flex flex-col items-center bg-gradient-to-r from-primary to-secondary bg-clip-text py-4 text-center text-transparent">
          <span className="animate-typingFull overflow-hidden whitespace-nowrap border-r-4 border-accent md:border-r-8">
            Hi! I'm David, a Full
          </span>
          <span className="animate-typing85 overflow-hidden whitespace-nowrap border-r-4 border-accent md:border-r-8">
            Stack Developer
          </span>
      </h1>
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
      <RoundedCarousel cardData={carouselCardData} />
    </main>
  )
}

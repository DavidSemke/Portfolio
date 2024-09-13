import { Link } from "react-router-dom"
import RoundedCarousel from "../carousel/RoundedCarousel"
import carouselCardData from "../../data/indexData"

export default function IndexPage() {
  return (
    <main className="flex flex-col items-center justify-center gap-8 pb-20">
      <h1 className="flex flex-col items-center bg-gradient-to-r from-primary to-secondary bg-clip-text py-4 text-center text-transparent">
        <div>
          <div className="animate-typingLine0 overflow-hidden whitespace-nowrap border-r-4 border-accent md:border-r-8">
            Hi! I'm David, a Full
          </div>
        </div>
        <div>
          <div className="animate-typingLine1 overflow-hidden whitespace-nowrap border-r-4 border-accent md:border-r-8">
            Stack Developer
          </div>
        </div>
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

import { Link } from "react-router-dom"
import RoundedCarousel from "../carousel/RoundedCarousel"
import carouselCardData from '../../data/indexData'

export default function IndexPage() {
  return (
    <main className="flex flex-col items-center justify-center gap-8 pb-20">
      <h1 className="flex flex-col items-center py-4 text-center bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
        <div>
          <div className="overflow-hidden whitespace-nowrap border-r-4 md:border-r-8 border-accent animate-typingLine0">
            Hi! I'm David, a Full
          </div>
        </div>
        <div>
          <div className="overflow-hidden whitespace-nowrap border-r-4 md:border-r-8 border-accent animate-typingLine1">
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
      <RoundedCarousel 
        cardData={carouselCardData}
      />
    </main>
  )
}

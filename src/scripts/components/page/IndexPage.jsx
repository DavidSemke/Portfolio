import { Link } from "react-router-dom"
import styles from "../../../stylesheets/components/page/indexPage.module.scss"

function IndexPage() {
  return (
    <main className={`${styles.indexPage} page`}>
      <h1>Why Hello There</h1>
      <p>
        I am David Semke, a Full Stack Developer building fronts, backs, and
        in-betweens. Feel free to check out some of my
        <Link to="/projects"> projects </Link>
        or
        <a href="https://techstack.fly.dev/"> blog posts </a>
        (which are hosted on one of my projects).
      </p>
      <p>
        If you like what you see and happen to be hiring, message me on LinkedIn
        so that we can chat. Who knows, I might be a perfect fit.
      </p>
    </main>
  )
}

export default IndexPage

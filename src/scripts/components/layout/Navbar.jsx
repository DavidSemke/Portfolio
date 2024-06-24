import { Link } from "react-router-dom"
import { Image } from "react-bootstrap"
import styles from "../../../stylesheets/components/layout/navbar.module.scss"

function Navbar() {
  return (
    <section className={styles.navbar}>
      <div className={styles.stickyContent}>
        <section className={styles.selfContainer}>
          <div className={styles.labelledSelfPortrait}>
            <Image src="/selfPortrait.jpeg" className={styles.selfPortrait} />
            <div className={styles.name}>David Semke</div>
          </div>
          <div className={styles.connectIconContainer}>
            <a href="https://github.com/DavidSemke">
              <Image src="/githubIcon.png" className={styles.connectIcon} />
            </a>
            <a href="https://www.linkedin.com/in/david-semke-5babbb203/">
              <Image src="/linkedinIcon.png" className={styles.connectIcon} />
            </a>
          </div>
        </section>
        <nav className={styles.nav}>
          <Link to={"/"}>Home</Link>
          <Link to={"/projects"}>Projects</Link>
        </nav>
      </div>
    </section>
  )
}

export default Navbar

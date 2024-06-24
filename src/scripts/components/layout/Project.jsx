import { Image } from "react-bootstrap"
import PropTypes from "prop-types"
import styles from "../../../stylesheets/components/layout/project.module.scss"

function Project({ title, tech, deployment, thumbnails, description }) {
  return (
    <article className={styles.project}>
      <header className={styles.header}>
        <h2>{title}</h2>
        <div className={styles.techBubbleContainer}>
          {tech.map((name) => {
            return (
              <div key={name} className={styles.techBubble}>
                {name}
              </div>
            )
          })}
        </div>
      </header>
      <div className={styles.content}>
        <div>
          <section>
            <h3>Description</h3>
            <p>{description}</p>
          </section>
          <section>
            <h3>Deployed at</h3>
            <a href={deployment}>{deployment}</a>
          </section>
        </div>
        <div className={styles.imageContent}>
          <Image src={thumbnails.mobile} className={styles.mobileThumbnail} />
          <Image src={thumbnails.desktop} className={styles.desktopThumbnail} />
        </div>
      </div>
    </article>
  )
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  tech: PropTypes.arrayOf(PropTypes.string).isRequired,
  deployment: PropTypes.string.isRequired,
  thumbnails: PropTypes.objectOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
}

export default Project

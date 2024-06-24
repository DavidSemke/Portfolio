import { useRouteError } from "react-router-dom"
import { Link } from "react-router-dom"
import styles from "../../../stylesheets/components/page/errorPage.module.scss"

function ErrorPage() {
  const error = useRouteError()
  let msg = "Error unknown"

  if (typeof error === "object" && error) {
    if ("statusText" in error) {
      msg = error.statusText
    } else if ("message" in error) {
      msg = error.message
    }
  }

  return (
    <div className="page">
      <h1 className={styles.h1}>Oops!</h1>
      <p className={styles.intro}>Sorry, an error has occurred.</p>
      <p className={styles.errorMsg}>
        <i>{msg}</i>
      </p>
      <Link to="/">
        <span className={styles.returnLink}>Return Home</span>
      </Link>
    </div>
  )
}

export default ErrorPage

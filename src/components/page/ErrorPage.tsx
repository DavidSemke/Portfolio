import { useRouteError } from "react-router"
import { Link } from "react-router"

export default function ErrorPage() {
  const error = useRouteError()
  let msg = "Error unknown"

  if (typeof error === "object" && error) {
    if ("statusText" in error && typeof error.statusText === "string") {
      msg = error.statusText
    } else if ("message" in error && typeof error.message === "string") {
      msg = error.message
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 pb-20">
      <h1>Oops!</h1>
      <p className="text-4xl">Sorry, an error has occurred.</p>
      <p className="text-2xl">
        <i>{msg}</i>
      </p>
      <Link to="/" className="link">
        <span className="text-2xl">Return Home</span>
      </Link>
    </main>
  )
}

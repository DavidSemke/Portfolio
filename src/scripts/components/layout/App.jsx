import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import styles from "../../../stylesheets/components/layout/app.module.scss"

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App

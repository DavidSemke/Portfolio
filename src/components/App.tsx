import { Outlet } from "react-router"
import Navbar from "./nav/Navbar"

export default function App() {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <Navbar />
      <div className="flex grow p-8 md:mx-auto md:w-4/5 lg:w-[calc(75%-0.75*var(--navbar-width-lg))] lg:grow-0 xl:w-[calc(60%-0.60*var(--navbar-width-lg))]">
        <Outlet />
      </div>
    </div>
  )
}

import { Outlet } from "react-router-dom"
import Navbar from "./nav/Navbar"

export default function App() {
  return (
    <div className='flex flex-col min-h-screen lg:flex-row'>
      <Navbar />
      <div className='grow flex p-8 md:mx-auto md:w-4/5 lg:grow-0 lg:w-[calc(75%-0.75*var(--navbar-width-lg))] xl:w-[calc(60%-0.60*var(--navbar-width-lg))]'>
        <Outlet />
      </div>
    </div>
  )
}
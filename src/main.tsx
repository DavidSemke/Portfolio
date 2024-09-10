import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./components/App"
import ErrorPage from "./components/page/ErrorPage"
import IndexPage from "./components/page/IndexPage"
import ProjectsPage from "./components/page/ProjectsPage"
import ContactPage from "./components/page/ContactPage"
import "./globals.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <IndexPage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      }
    ],
  }],
  {
    basename: '/Portfolio'
  }
)

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

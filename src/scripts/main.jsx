import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./components/layout/App.jsx"
import ErrorPage from "./components/page/ErrorPage.jsx"
import IndexPage from "./components/page/IndexPage.jsx"
import ProjectsPage from "./components/page/ProjectsPage.jsx"
import "bootstrap/dist/css/bootstrap.min.css"
import "../stylesheets/root.scss"

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
    ],
  }],
  {
    basename: '/Portfolio'
  }
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage';
import Body from './components/Body/Body';
import AboutUs from './components/AboutUs/AboutUs';
import './index.css'

const browseRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about-us",
        element: <AboutUs />
      }
    ],
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={browseRouter} />
  </StrictMode>,
)

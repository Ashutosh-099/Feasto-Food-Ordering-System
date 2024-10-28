import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Restaurant from './components/Restaurant/Restaurant';
import ErrorPage from './components/ErrorPage/ErrorPage';
import './index.css'
import CuisineCollection from './components/CuisineCollection/CuisineCollection.jsx';

{/* Lazy Loading / Chunking */ }
const Body = lazy(() => import("./components/Body/Body"));
const AboutUs = lazy(() => import("./components/AboutUs/AboutUs"));

const browseRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Suspense fallback={<h1>Please wait...</h1>}><Body /></Suspense>
      },
      {
        path: "/about-us",
        element: <Suspense fallback={<h1>Please wait...</h1>}><AboutUs /></Suspense>
      },
      {
        path: "/restaurant/:resId",
        element: <Restaurant />
      },
      {
        path: "/collections/:collectionId/:tag/:name",
        element: <CuisineCollection />
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

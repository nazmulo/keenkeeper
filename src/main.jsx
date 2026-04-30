import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import './index.css'
import Layout from './layout/Layout';
import NotFound from "./components/NotFound"
import Timeline from "./pages/Timeline"
import Stats from "./pages/Stats"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout /> ,
    children: [
      {
        index: true,
        element: <h2>homepage</h2> ,
      },
      {
        path: "/timeline",
        element: <Timeline /> ,
      },
      {
        path: "/stats",
        element: <Stats /> ,
      },
    ],
    errorElement: <NotFound />
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    
  </StrictMode>,
)

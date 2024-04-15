import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

// import Navbar from './Navbar';
import Root from './components/Root';
import Home from './components/Home';
import ResortDetails from './components/ResortDetails';
import Gallary from './components/Gallary';
import ErrorPage from './components/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:
      [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/gallary",
          element: <Gallary></Gallary>,
        },
        {
          path: "/resort/:id",
          element: <ResortDetails></ResortDetails>,
          loader: () => fetch("../resort.json")
        },
      ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

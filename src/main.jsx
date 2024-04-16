
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
import Login from './components/Login';
import Register from './components/Register';
// import AuthProviders from './providers/AuthProviders';
import FirebaseProvider from './components/FirebaseProvider/FirebaseProvider';


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
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
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
  <FirebaseProvider>
    <RouterProvider router={router} />
  </FirebaseProvider>



)

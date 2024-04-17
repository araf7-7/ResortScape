
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

import FirebaseProvider from './components/FirebaseProvider/FirebaseProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import UserProfile from './components/UserProfile';

// import { Toaster } from 'sonner';
import React from 'react';
import { Toaster } from 'sonner';
import Profile from './components/Profile';


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
          element: <PrivateRoute>
            <Gallary></Gallary>
          </PrivateRoute>,
        },
        {
          path: "/userprofile",
          element: <PrivateRoute>
            <UserProfile></UserProfile>
          </PrivateRoute>,
        },
        
        {
          path: "/profile",
          element: <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>,
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
          element: <PrivateRoute>
            <ResortDetails></ResortDetails>
          </PrivateRoute>,
          loader: () => fetch("../resort.json")
        },
      ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <FirebaseProvider>

    <Toaster position='top-center'></Toaster>
    <RouterProvider router={router} />
  </FirebaseProvider>
  </React.StrictMode>



)

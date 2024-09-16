import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from "./Views/Home/Home"
import Furniture from "./Views/Furniture/Furniture"
import Garments from "./Views/Garments/Garments"
import Electronics from "./Views/Electronics/ElectronicsCategories"
import Contact from "./Views/Contact/Contact"
import Registration from "./Views/Registration/Registration"
import Reviews from "./Views/Reviews/Reviews"
import Inquiry from './Views/Inquiry/Inquiry';

const root = ReactDOM.createRoot(document.getElementById('root'));


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/furniture',
    element: <Furniture/>,
  },
  {
    path: '/garments',
    element: <Garments/>,
  },
  {
    path: '/electronics',
    element: <Electronics/>,
  },
  {
    path: '/contact',
    element: <Contact/>,
  },
  {
    path: '/registration',
    element: <Registration/>,
  },
  {
    path: '/reviews',
    element: <Reviews/>,
  },
  {
    path: '/inquiry',
    element: <Inquiry/>
  }
])


root.render(<RouterProvider router={router}/>)
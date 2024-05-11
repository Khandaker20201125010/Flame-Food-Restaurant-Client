import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import Home from './Components/Home/Home';
import Authprovider from './Components/Providers/Authprovider';
import AllFoods from './Components/AllFoods/AllFoods';
import Gallery from './Components/Gallery/Gallery';
import Myprofile from './Components/Myprofile/Myprofile';
import Login from './Components/Login/Login';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[{
      path:'/',
      element:<Home></Home>,
       },
       {
        path:'/AllFoods',
        element:<AllFoods></AllFoods>
      },
       {
        path:'/Gallery',
        element:<Gallery></Gallery>
      },
       {
        path:'/MyProfile',
        element:<Myprofile></Myprofile>
      },
       {
        path:'/Login',
        element:<Login></Login>
      },
    
    
    
    
    
    
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Authprovider> <RouterProvider router={router} /></Authprovider>
  </React.StrictMode>,
)

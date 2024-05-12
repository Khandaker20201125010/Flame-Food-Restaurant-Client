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
import Register from './Components/Register/Register';
import Myfood from './Components/Myfood/Myfood';
import OrderedFood from './Components/OrderedFood/OrderedFood';
import AddFood from './Components/AddFood/AddFood';
import Details from './Components/Details/Details';
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
       {
        path:'/Register',
        element:<Register></Register>
      },
       {
        path:'/MyFood',
        element:<Myfood></Myfood>
      },
       {
        path:'/OrderedFood',
        element:<OrderedFood></OrderedFood>
      },
       {
        path:'/AddFood',
        element:<AddFood></AddFood>
      },
       {
        path:'/details/:id',
        element:<Details></Details>,
        loader:()=> fetch('http://localhost:5000/restaurant')
        
      },
    
    
    
    
    
    
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Authprovider> <RouterProvider router={router} /></Authprovider>
  </React.StrictMode>,
)

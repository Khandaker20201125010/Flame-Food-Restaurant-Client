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
import Error from './Components/Error/Error';
import Privetroot from './Components/Privet/Privetroot';
const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<Error></Error>,
    element: <Main></Main>,
    
    children:[{
      path:'/',
      element:<Home></Home>,
       },
       {
        path:'/AllFoods',
        
        element:<Privetroot><AllFoods></AllFoods></Privetroot>
      },
       {
        path:'/Gallery',
        element:<Privetroot><Gallery></Gallery></Privetroot>
      },
       {
        path:'/MyProfile',
        element:<Privetroot><Myprofile></Myprofile></Privetroot>
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
        element:<Privetroot><Myfood></Myfood></Privetroot>
      },
       {
        path:'/OrderedFood',
        element:<Privetroot><OrderedFood></OrderedFood></Privetroot>,
        loader:()=> fetch('http://localhost:5000/restaurant')
      },
       {
        path:'/AddFood',
        element:<Privetroot><AddFood></AddFood></Privetroot>
      },
       {
        path:'/details/:id',
        element:<Privetroot><Details></Details></Privetroot>,
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

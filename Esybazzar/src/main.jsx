import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'swiper/css';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './home/home.jsx';
import Blog from './blog/Blog.jsx';
import Shop from './shop/shop.jsx';
import Singleproduct from './shop/singleproduct.jsx';
import Cartpage from './shop/cart-page.jsx';
import Blogdetails from './blog/blogdesc.jsx';
import Aboutpage from './about/aboutpage.jsx';
import Contactpage from './contact/contactpage.jsx';
import Authprovider from './context/auth.jsx';
import Privateroute from './privateroute/privateroute.jsx';
import Login from './login/loginpage.jsx';
import Signup from './components/signup.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,

    children : [{
      path: "/",
      element: <Home/>,
    },
    {
      path: "/blog",
      element: <Blog/>,
    },
    {
      path: "/blog/:id",
      element: <Blogdetails/>,
    },
    {
      path: "/shop",
      element: <Shop/>,
    },
    {
      path: "/shop/:id",
      element: <Singleproduct/>,
    },
    {
      path: "/about",
      element: <Aboutpage/>,
    },
    {
      path: "/contact",
      element: <Contactpage/>,
    },
    {
      path: "/cart-page",
      element: <Privateroute><Cartpage /></Privateroute>,
    }
     
    ]
  },
  {
    path : "/login",
    element: <Login/>,
  },
  {
    path : "/sign-up",
    element: <Signup/>,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render( 
  <Authprovider>
<RouterProvider router={router} /></Authprovider>
 
 
);
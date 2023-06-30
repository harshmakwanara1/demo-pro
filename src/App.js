import {
  createBrowserRouter,
} from "react-router-dom";
import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import HomePage from "./Components/HomePage"
import LoginPage2 from "./Components/LoginPage2"
import Errorpage from "./Components/Errorpage";
import Registerpage from "./Components/Registerpage";
// import Loginpage from "./Components/LoginPage";
import Admin from "./Components/admin";
import Logout from "./Components/Logout";
 
const app = createBrowserRouter([
  {
    path:"/",
    element:<HomePage />,
    errorElement:<Errorpage/>,
  },  
  {
    path:"/home",
    element:<HomePage />,
  },  
  // {
  //   path:"/loginpage",
  //   element:<LoginPage/>
  // },
  {
    path:"/register",
    element:<Registerpage/>
  },
  {
    path:"/login",
    element:<LoginPage2/>
  },
  {
    path:"/admin",
    element:<Admin/>
  },
  {
    path: "/logout",
    element: <><Logout /></>,
},
  {
    path: "/error",
    element: <><Errorpage /></>,
},
]);
export default app;
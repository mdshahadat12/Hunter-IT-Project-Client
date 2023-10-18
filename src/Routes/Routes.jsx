import { createBrowserRouter } from "react-router-dom";
import HomeLayOut from "./HomeLayOut";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayOut/>,
      children:[
        {
            path:'/',
            element:<Home/>,
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/registration',
            element: <Registration></Registration>
        },
      ]
    },
  ]);

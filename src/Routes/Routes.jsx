import { createBrowserRouter } from "react-router-dom";
import HomeLayOut from "./HomeLayOut";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import AddProduct from "../Pages/AddProduct";
import BrandsPage from "../Components/BrandPage/BrandsPage";
import ProductDetails from "../Components/BrandPage/ProductDetails";
import Profile from "../Pages/Profile";
import About from "../Pages/About";
import Message from "../Pages/Message";
import MyCart from "../Pages/MyCart";
import UpdateProduct from "../Pages/UpdateProduct";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayOut/>,
      children:[
        {
            path:'/',
            element:<Home/>,
            loader:()=>fetch('/brandName.json')
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/registration',
            element: <Registration></Registration>
        },
        {
            path:'/addproduct',
            element: <AddProduct></AddProduct>
        },
        {
            path:'/brand/:id',
            element: <BrandsPage></BrandsPage>,
        },
        {
            path:'/product/:id',
            element: <ProductDetails></ProductDetails>,
        },
        {
            path:'/profile',
            element: <Profile></Profile>
        },
        {
            path:'/about',
            element: <About></About>
        },
        {
            path:'/contact',
            element: <Message></Message>
        },
        {
            path:'/cart',
            element: <MyCart></MyCart>
        },
        {
            path:'/update/:id',
            element: <UpdateProduct></UpdateProduct>
        }
      ]
    },
  ]);

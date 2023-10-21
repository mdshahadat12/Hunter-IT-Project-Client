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
import PrivetRoute from "./PrivetRoute";
import Erorr from "../Pages/Erorr";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayOut />,
    errorElement: <Erorr></Erorr>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/brandName.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/addproduct",
        element: (
          <PrivetRoute>
            <AddProduct></AddProduct>
          </PrivetRoute>
        ),
      },
      {
        path: "/brand/:id",
        element: <BrandsPage></BrandsPage>,
      },
      {
        path: "/product/:id",
        element: (
          <PrivetRoute>
            <ProductDetails></ProductDetails>
          </PrivetRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivetRoute>
            <Profile></Profile>
          </PrivetRoute>
        ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Message></Message>,
      },
      {
        path: "/cart",
        element: (
          <PrivetRoute>
            <MyCart></MyCart>
          </PrivetRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivetRoute>
            <UpdateProduct></UpdateProduct>
          </PrivetRoute>
        ),
      },
    ],
  },
]);

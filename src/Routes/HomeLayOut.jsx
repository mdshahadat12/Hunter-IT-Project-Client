import { Outlet } from "react-router-dom";
import Navbar from "../Components/Home/Navbar";
import Footer from "../Components/Home/Footer";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const HomeLayOut = () => {
  const {IsDark} = useContext(AuthContext)
  console.log(IsDark);
  return (
    <div className={`${IsDark?'bg-gray-800':''}`}>
      <div className={`max-w-[1200px] w-[90%] mx-auto`}>
        <Navbar></Navbar>
        <Outlet />
        <Footer></Footer>
      </div>
    </div>
  );
};

export default HomeLayOut;

import { Outlet } from "react-router-dom";
import Navbar from "../Components/Home/Navbar";
import Footer from "../Components/Home/Footer";


const HomeLayOut = () => {
    return (
        <div className="max-w-[1200px] w-[90%] mx-auto">
            <Navbar></Navbar>
            <Outlet/>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayOut;
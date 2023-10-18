import { Outlet } from "react-router-dom";
import Navbar from "../Components/Home/Navbar";


const HomeLayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet/>
        </div>
    );
};

export default HomeLayOut;
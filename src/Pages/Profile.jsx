import { useContext } from "react";
import ProfilePic from ".//About";
import { AuthContext } from "../Context/AuthProvider";

const Profile = () => {
    const {user}=useContext(AuthContext)
    return (
            <div className="my-10 bg-orange-300 p-10 rounded-lg">
            <div><img className="h-[150px] w-[150px] rounded-full ring-4 ring-gray-400 mx-auto my-10" src={user?.photoURL?user?.photoURL:ProfilePic} alt="" /></div>
            <h1 className="text-center text-xl font-semibold">Name: {user?.displayName}</h1>
            <div className="grid grid-cols-2 my-10">
                <div className="px-20">
                    <h2 className="text-left">E-mail</h2>
                    <h2 className="text-right">{user?.email?user?.email:"E-imail@mail.com"}</h2>
                    <hr />
                    <h2 className="text-left mt-5">Country</h2>
                    <h2 className="text-right mb-5">Bangladesh</h2>
                    <hr />
                    <h2 className="text-left">Phone</h2>
                    <h2 className="text-right">+88017xxxxxxxx</h2>
                    
                </div>
                <div className="px-20">
                    <h2 className="text-left">Address</h2>
                    <h2 className="text-right">Dhaka, Bangladesh</h2>
                    <hr />
                    <h2 className="text-left mt-5">Date of Birth</h2>
                    <h2 className="text-right mb-5">None</h2>
                    <hr />                    
                </div>
            </div>
        </div>
        
    );
};

export default Profile;
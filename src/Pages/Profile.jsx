import { useContext } from "react";
import ProfilePic from ".//About";
import { AuthContext } from "../Context/AuthProvider";

const Profile = () => {
    const {user,IsDark}=useContext(AuthContext)
    console.log(user);
    return (
            <div className={`${IsDark ? 'bg-gray-900 text-white' : 'bg-orange-300' } my-10 p-10 rounded-lg`}>
            <div><img className="h-[150px] w-[150px] rounded-full ring-4 ring-gray-400 mx-auto my-10" src={user?.photoURL ? user?.photoURL : ProfilePic} alt="" /></div>
            <h1 className="text-center text-xl font-semibold">Name: {user?.displayName}</h1>
            <div className="grid grid-cols-2 gap-5 my-10">
                <div className="md:px-20">
                    <h2>E-mail</h2>
                    <h2 >{user?.email?user?.email:"E-imail@mail.com"}</h2>
                    <hr />
                    <h2 className="mt-5">Country</h2>
                    <h2 className="mb-5">Bangladesh</h2>
                    <hr />
                    <h2>Phone</h2>
                    <h2>+88017xxxxxxxx</h2>
                    
                </div>
                <div className="md:px-20">
                    <h2>Address</h2>
                    <h2>Dhaka, Bangladesh</h2>
                    <hr />
                    <h2 className="mt-5">Date of Birth</h2>
                    <h2 className="mb-5">None</h2>
                    <hr />                    
                </div>
            </div>
        </div>
        
    );
};

export default Profile;
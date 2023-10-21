import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const Message = () => {
    const {IsDark} = useContext(AuthContext)
    return (
            <div className={`${IsDark?"bg-gray-900 text-white":"bg-orange-300"} p-10 my-10 rounded-lg`}>
            <div className="md:w-1/2 my-10 mx-auto">
                <h1 className="text-2xl text-center font-bold my-10">Contact Us</h1>
                <form action="">
                    <input size="" placeholder="Your name" type="text" name="" className="p-2 mb-8 w-full border-4 rounded-md"/>
                    <br/>
                    <input placeholder="Your email" type="text" name="" className="p-2 mb-8 w-full border-4 rounded-md"/>
                    <br/>
                    <textarea className="p-2 w-full border-4 rounded-md" placeholder="Message"rows="7"></textarea>
                    <br/>
                    <input className="p-2 px-4 w-full text-black bg-white cursor-pointer rounded-lg mt-6 font-semibold" value="Submit" type="button"/>
                </form>
            </div>
        </div>
        
    );
};

export default Message;
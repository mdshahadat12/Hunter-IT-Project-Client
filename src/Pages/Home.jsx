import { useLoaderData } from "react-router-dom";
import BrandCardContainer from "../Components/Home/BrandCardContainer";
import About from "./About";
import Message from "./Message";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const Home = () => {
  const data = useLoaderData();
  const {IsDark} = useContext(AuthContext)
  // console.log(IsDark);
  return (
    <div>
      <div className={`${IsDark ? 'bg-gray-900' : 'bg-orange-100' } rounded-lg my-10 bg-orange-100 mx-auto flex flex-col-reverse md:flex-row items-center justify-center md:p-9`}>
        <div className="flex flex-col md:w-1/2 items-center text-center justify-center">
          <h3 className={`${IsDark?"text-white":""} lg:text-3xl text-2xl font-semibold mb-9`}>
            -SALE FEVER-
          </h3>
          <h1 className={`${IsDark?"text-white":""} lg:text-5xl text-3xl font-bold`}>
            Purchase & get <br />
            <span className="text-orange-500">40% off</span>
          </h1>
          <div className="flex gap-4 text-xl font-semibold my-16 items-center">
            <button
              id="copy"
              className="button px-5 py-2 text-white rounded-md bg-orange-500"
              type="button"
            >
              See Details
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img className="rounded-full" src='https://i.ibb.co/0rGJ2mh/banner-img-removebg-preview.png' alt="" />
        </div>
      </div>
      <BrandCardContainer IsDark={IsDark} data={data}></BrandCardContainer>
      <About></About>
      <Message></Message>
    </div>
  );
};

export default Home;

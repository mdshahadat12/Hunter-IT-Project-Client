import { useLoaderData } from "react-router-dom";
import BrandCardContainer from "../Components/Home/BrandCardContainer";
import About from "./About";
import Message from "./Message";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <div className="rounded-lg my-10 bg-orange-100 mx-auto flex flex-col-reverse md:flex-row items-center justify-center md:p-9">
        <div className="flex flex-col md:w-1/2 items-center text-center justify-center">
          <h3 className="lg:text-3xl text-2xl font-semibold mb-9">
            -SALE FEVER-
          </h3>
          <h1 className="lg:text-5xl text-3xl font-bold">
            Purchase & get <br />
            <span className="text-orange-500">20% off</span>
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
          <img className="rounded-full" src='https://previews.123rf.com/images/houbacze/houbacze1801/houbacze180100339/93088446-banner-super-sale-vector-illustration.jpg' alt="" />
        </div>
      </div>
      <BrandCardContainer data={data}></BrandCardContainer>
      <About></About>
      <Message></Message>
    </div>
  );
};

export default Home;

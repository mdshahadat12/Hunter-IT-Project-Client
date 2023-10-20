import { useLoaderData } from "react-router-dom";
import BrandCardContainer from "../Components/Home/BrandCardContainer";
import About from "./About";
import Message from "./Message";

const Home = () => {
  const data = useLoaderData()
  return (
    <div>
      <div className="h-[450px] rounded-lg flex justify-center items-center bg-orange-300 my-10">
        <h1 className="text-3xl font-bold">This is Banner</h1>
          
      </div>
      <BrandCardContainer data={data}></BrandCardContainer>
      <About></About>
      <Message></Message>
    </div>
  );
};

export default Home;

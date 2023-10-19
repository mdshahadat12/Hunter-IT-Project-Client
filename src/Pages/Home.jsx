import { useLoaderData } from "react-router-dom";
import BrandCardContainer from "../Components/Home/BrandCardContainer";
import HomeSlider from "../Components/Home/HomeSlider";

const Home = () => {
  const data = useLoaderData()
  return (
    <div>
      <div>
          <HomeSlider></HomeSlider>
      </div>
      <BrandCardContainer data={data}></BrandCardContainer>
      <div className="text-center text-6xl">this is home</div>
    </div>
  );
};

export default Home;

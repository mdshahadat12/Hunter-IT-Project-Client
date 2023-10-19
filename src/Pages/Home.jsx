import BrandCardContainer from "../Components/Home/BrandCardContainer";
import HomeSlider from "../Components/Home/HomeSlider";

const Home = () => {
  return (
    <div>
      <div>
          <HomeSlider></HomeSlider>
      </div>
      <BrandCardContainer></BrandCardContainer>
      <div className="text-center text-6xl">this is home</div>
    </div>
  );
};

export default Home;

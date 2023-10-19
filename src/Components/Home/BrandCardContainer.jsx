import BrandCard from "./BrandCard";

const BrandCardContainer = () => {
  return (
    <div>
        <h1 className="text-center font-bold text-3xl mb-5">Our Brands</h1>
      <div className="grid grid-cols-1 my-20 md:grid-cols-3 gap-5">
        <BrandCard></BrandCard>
        <BrandCard></BrandCard>
        <BrandCard></BrandCard>
        <BrandCard></BrandCard>
        <BrandCard></BrandCard>
        <BrandCard></BrandCard>
      </div>
    </div>
  );
};

export default BrandCardContainer;

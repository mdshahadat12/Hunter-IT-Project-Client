/* eslint-disable react/prop-types */
import BrandCard from "./BrandCard";

const BrandCardContainer = ({data}) => {
  return (
    <div>
        <h1 className="text-center font-bold text-3xl mb-5">Our Brands</h1>
      <div className="grid grid-cols-1 my-20 md:grid-cols-3 gap-5">
        {
          data?.map(data=><BrandCard key={data} data={data}></BrandCard>)
        }
      </div>
    </div>
  );
};

export default BrandCardContainer;

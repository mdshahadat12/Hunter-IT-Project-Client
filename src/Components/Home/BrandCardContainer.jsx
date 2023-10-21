/* eslint-disable react/prop-types */
import BrandCard from "./BrandCard";

const BrandCardContainer = ({IsDark,data}) => {
  return (
    <div className={`${IsDark?"bg-gray-900 text-white":"bg-orange-300"} p-10 rounded-lg`}>
        <h1 className="text-center font-bold text-3xl mb-5">Our Brands</h1>
      <div className="grid grid-cols-1 my-20 md:grid-cols-3 gap-5">
        {
          data?.map(data=><BrandCard key={data.id} data={data}></BrandCard>)
        }
      </div>
    </div>
  );
};

export default BrandCardContainer;

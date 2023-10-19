import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
  const id = useParams();
  const LoadData = useLoaderData();
  const [data, setData] = useState({});

  useEffect(() => {
    const findData = LoadData?.find((res) => res.id == id.id);
    setData(findData);
  }, [LoadData, id]);

  console.log(data);
  const { Bname, description, imglink, name, price, rating, type } = data || {};
  return (
    <div>
      <div className="p-10">
      <img className="w-full md:h-[450px] rounded-lg" src={imglink} alt="" />
      </div>
      <h1>{name}</h1>
    </div>
  );
};

export default ProductDetails;

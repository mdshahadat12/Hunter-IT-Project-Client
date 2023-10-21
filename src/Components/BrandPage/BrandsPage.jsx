import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import Slider from "./Slider";
import { useEffect, useState } from "react";
import Loading from "../Loading";

const BrandsPage = () => {
  const brandP = useParams();
  const brand = brandP.id;
  const [upData, setUpData] = useState([]);
  const [Load,setLoad] = useState(true)
  // // const data = useLoaderData()
  // console.log(brand);


  useEffect(() => {
    fetch("https://hunter-it-server-irg2xm2pc-mdshahadat12.vercel.app/product")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const filterData = data?.filter((data) => data.Bname == brand);
        setUpData(filterData);
        setLoad(false)
        // console.log(filterData);
      });
  }, [brand]);

  return Load ? <Loading></Loading> : (
    <div>
      {upData.length > 0 ? (
        <div>
          <Slider upData={upData}></Slider>
          <h1 className="text-center font-bold text-3xl mb-5">Products</h1>
          <div className="grid grid-cols-2 gap-5 my-10">
            {upData?.map((data) => (
              <ProductCard key={data._id} data={data}></ProductCard>
            ))}
          </div>
        </div>
      ) : (
        <div className="h-[50vh] flex items-center justify-center">
          <h1 className="font-bold text-3xl">
            Have not any available Products!
          </h1>
        </div>
      )}
    </div>
  );
};

export default BrandsPage;

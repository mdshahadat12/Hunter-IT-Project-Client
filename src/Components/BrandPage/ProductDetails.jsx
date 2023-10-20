import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const id = useParams();
  console.log(id.id);
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/product/${id.id}`)
    .then(res=>res.json())
    .then(data=>{
      setData(data);
      console.log(data);
    })
  }, [id]);

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

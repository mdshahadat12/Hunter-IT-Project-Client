import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const id = useParams();
  console.log(id.id);
  const [data, setData] = useState({});
  const [added, setAdded] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/product/${id.id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
    fetch("http://localhost:5000/cart")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAdded(data);
      });
  }, [id]);

  console.log(data);
  const { _id, Bname, description, imglink, name, price, rating, type } =
    data || {};

  console.log(data);

  const handleAddCart = () => {
    const oldData = added?.map((data) => data._id == _id);
    console.log(oldData);
    if (oldData.length>0) {
      return alert("already have");
    }

    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("added on cart");
      });
  };

  return (
    <div>
      <div className="md:grid mt-10 md:grid-cols-6">
        <img
          className="w-full border-2 border-orange-400 md:col-span-4 md:h-[450px] rounded-lg"
          src={imglink}
          alt=""
        />
        <div className="md:col-span-2 flex flex-col md:ml-20 justify-center">
          <h1 className="font-semibold my-3 bg-orange-600 rounded-lg px-2 text-lg">
            Price: ${price}
          </h1>
          <h1 className="font-semibold my-3 bg-orange-600 rounded-lg px-2 text-lg">
            Product Name: {Bname}
          </h1>
          <h1 className="font-semibold my-3 bg-orange-600 rounded-lg px-2 text-lg">
            Product Type: {type}
          </h1>
          <h1 className="font-semibold my-3 bg-orange-600 rounded-lg px-2 text-lg">
            Rating: {rating}
          </h1>
          <button
            onClick={handleAddCart}
            className="font-semibold my-3 bg-orange-600 rounded-lg py-2 text-white cursor-pointer text-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <h1 className="text-xl font-semibold border-b-2 border-black pb-5 my-7">
        {name}
      </h1>
      <p className="text-gray-700 mb-10">{description}</p>
    </div>
  );
};

export default ProductDetails;

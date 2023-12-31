import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import ReactStars from "react-rating-stars-component";
import Loading from "../Loading";

const ProductDetails = () => {
  const id = useParams();
  // console.log(id.id);
  const [data, setData] = useState({});
  const [added, setAdded] = useState([]);
  const [Load,setLoad] = useState(true)

  useEffect(() => {
    fetch(
      `https://hunter-it-server-irg2xm2pc-mdshahadat12.vercel.app/product/${id.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoad(false)
        // console.log(data);
      });
    fetch("https://hunter-it-server-irg2xm2pc-mdshahadat12.vercel.app/cart")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAdded(data);
      });
  }, [id]);

  // console.log(data);
  const { _id, Bname, description, imglink, name, price, rating, type } = data || {};
  
  const RatingSize = {
    size: 30,
    value: parseFloat(rating),
    edit: false
  };

  console.log(RatingSize);

  const handleAddCart = (id) => {
    const oldData = added?.map((data) => data._id == id);
    console.log(oldData, id);
    if (oldData[0]) {
      return Swal.fire("Already Added!", "Already Added!", "error");
    } else {
      fetch("https://hunter-it-server-irg2xm2pc-mdshahadat12.vercel.app/cart", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            Swal.fire("Good job!", "Successfuly Added!", "success");
          }
        });
    }
  };

  return Load ? <Loading></Loading> : (
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
          <h1 className="font-semibold my-3 bg-orange-600 rounded-lg p-2 text-lg">
          <ReactStars {...RatingSize} />
          </h1>
          <button
            onClick={() => handleAddCart(_id)}
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

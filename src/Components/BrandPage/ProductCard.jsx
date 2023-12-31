/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const ProductCard = ({data}) => {
  const {_id,Bname,description,imglink,name,price,rating,type} = data ||{};
  const RatingSize = {
    size: 30,
    value: parseFloat(rating),
    edit: false
  };
  return (

      <div className="bg-white border border-gray-200 rounded-lg shadow">
        <img className="rounded-t-lg h-[300px] w-full" src={imglink} alt="" />
      <div className="p-5 bg-orange-200">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">
          {name}
        </h5>
        <div className="flex justify-between p-2 bg-orange-300 rounded-t-lg">
        <h5 className="mb-2 uppercase tracking-tight">
          {Bname}
        </h5>
        <h5 className="mb-2  tracking-tight">
          Type: {type}
        </h5>
        </div>
        <div className="flex justify-between p-2 bg-orange-300 rounded-b-lg">
        <h5 className="mb-2 tracking-tight">
          Price: ${price}
        </h5>
        <h5 className="mb-2 tracking-tight">
        <ReactStars {...RatingSize} activeColor="#FF0000" />
        </h5>
        </div>

        <p className="my-5 font-normal text-gray-700">
         {description.slice(0,100)}...
        </p>
        <div className="flex justify-between">
          <Link
          to={`/product/${_id}`}
            className="items-center w-1/2 mr-5 px-3 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300"
          >
            Details
          </Link>
          <Link
          to={`/update/${_id}`}
            className="w-1/2 items-center -5 px-3 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300"
          >
            Update
          </Link>
        </div>
      </div>
    </div>

    
  );
};

export default ProductCard;

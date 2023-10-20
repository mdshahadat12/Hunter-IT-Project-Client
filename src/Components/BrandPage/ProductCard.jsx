/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const ProductCard = ({data}) => {
  const {_id,Bname,description,imglink,name,price,rating,type} = data ||{};
  return (

      <div className="bg-white border border-gray-200 rounded-lg shadow">
        <img className="rounded-t-lg h-[300px] w-full" src={imglink} alt="" />
      <div className="p-5 bg-blue-200">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">
          {name}
        </h5>
        <div className="flex justify-between p-2 bg-blue-300 rounded-t-lg">
        <h5 className="mb-2 uppercase tracking-tight">
          {Bname}
        </h5>
        <h5 className="mb-2 tracking-tight">
          Price: {price}
        </h5>
        </div>
        <div className="flex justify-between p-2 bg-blue-300 rounded-b-lg">
        <h5 className="mb-2  tracking-tight">
          Type: {type}
        </h5>
        <h5 className="mb-2 tracking-tight">
          Rating: {rating}
        </h5>
        </div>

        <p className="my-5 font-normal text-gray-700">
         {description.slice(0,100)}...
        </p>
        <div className="flex justify-between">
          <Link
          to={`/product/${_id}`}
            className="items-center w-1/2 mr-5 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Details
          </Link>
          <Link
          to={`/update/${_id}`}
            className="w-1/2 items-center -5 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Update
          </Link>
        </div>
      </div>
    </div>

    
  );
};

export default ProductCard;

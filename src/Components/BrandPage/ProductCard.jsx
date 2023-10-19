/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const ProductCard = ({data}) => {

    // const data = {
    //     "id": 1,
    //     "title": "PUBG Tournament in  BD",
    //     "img": "https://i.ibb.co/nR3PZgQ/7.png",
    //     "time": "2023-10-15 09:00 AM",
    //     "venue": "Conference Hall In Dhaka",
    //     "creator_name": "Md Shahadat",
    //     "running": true,
    //     "location": "Dhaka, Bangladesh",
    //     "description": "Prepare for an adrenaline-pumping gaming extravaganza like never before! Get ready to drop into the battlegrounds and conquer your foes in the most thrilling PlayerUnknown's Battlegrounds (PUBG) tournament to hit Bangladesh! Our tournament features a challenging format designed to test the skills of the best PUBG players in Bangladesh. With competitive squad and solo matches, teams and solo players will battle it out for supremacy. Expect intense firefights, epic strategies, and heart-pounding moments. The stakes are high, and the rewards are even higher! Win big with generous cash prizes for the top contenders. There's no better motivation to bring your A-game and claim victory."
    //   }


    
  const {id,Bname,description,imglink,name,price,rating,type} = data ||{};
  return (
    <div data-aos="flip-left">
      <div className="bg-white border border-gray-200 rounded-lg shadow">
        <img className="rounded-t-lg w-full" src={imglink} alt="" />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">
          {name}
        </h5>

        <p className="mb-3 font-normal text-gray-700">
         {description.slice(0,150)}...
        </p>
        <div className="flex justify-center">
          <Link
          to={`/product/${id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Know more
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default ProductCard;

/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BrandCard = () => {
  const data = {
    id: 1,
    title: "Google",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png",
    time: "2023-10-15 09:00 AM",
    venue: "Conference Hall In Dhaka",
    creator_name: "Md Shahadat",
    running: true,
    location: "Dhaka, Bangladesh",
    Brand: 'google'
  };

  const { Brand, title, img } = data || {};
  return (
    <div>
      <Link to={`brand/${Brand}`}>
        <div className="bg-white border border-gray-200 rounded-lg shadow">
          <img className="rounded-t-lg p-5 w-full" src={img} alt="" />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight">{title}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BrandCard;

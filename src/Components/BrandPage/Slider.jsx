/* eslint-disable react/prop-types */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";


// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function Slider({upData}) {
  console.log(upData);
  return (
    <div className="my-16">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="rounded-xl relative" src={upData[0]?.imglink} alt="" />
          <div className="bg-[#030303a4] flex flex-col justify-center absolute w-full h-full">
          <h1 className=" text-center text-4xl md:text-7xl font-bold text-green-500">This Is Big opportunity</h1>
          <p className="text-white my-10 text-lg font-semibold">The ultimate sale</p>
          <button className="px-3 py-2 w-fit mx-auto rounded-lg text-white font-bold bg-orange-500">See Details</button>
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-xl relative" src={upData[1]?.imglink} alt="" />
          <div className="bg-[#030303a4] flex flex-col justify-center absolute w-full h-full">
          <h1 className=" text-center text-4xl md:text-7xl font-bold text-green-500">This Is Big opportunity</h1>
          <p className="text-white my-10 text-lg font-semibold">The ultimate sale</p>
          <button className="px-3 py-2 w-fit mx-auto rounded-lg text-white font-bold bg-orange-500">See Details</button>
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-xl relative" src={upData[2]?.imglink} alt="" />
          <div className="bg-[#030303a4] flex flex-col justify-center absolute w-full h-full">
          <h1 className=" text-center text-4xl md:text-7xl font-bold text-green-500">This Is Big opportunity</h1>
          <p className="text-white my-10 text-lg font-semibold">The ultimate sale</p>
          <button className="px-3 py-2 w-fit mx-auto rounded-lg text-white font-bold bg-orange-500">See Details</button>
          </div>
          </SwiperSlide>
      </Swiper>
    </div>
  );
}

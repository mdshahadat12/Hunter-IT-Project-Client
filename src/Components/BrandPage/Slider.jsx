// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";


// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function Slider() {
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
          <img className="rounded-xl relative" src="https://i.ibb.co/M8zh8Gm/8.png" alt="" />
          <div className="bg-[#030303a4] flex flex-col justify-center absolute w-full h-full">
          <h1 className=" text-center text-4xl md:text-7xl font-bold text-green-500">Lets Start The Game</h1>
          <p className="text-white my-10 text-lg font-semibold">The ultimate Game Race</p>
          <button className="px-3 py-2 w-fit mx-auto rounded-lg text-white font-bold bg-blue-500">Book Now</button>
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-xl relative" src="https://i.ibb.co/nR3PZgQ/7.png" alt="" />
          <div className="bg-[#030303a4] flex flex-col justify-center absolute w-full h-full">
          <h1 className=" text-center text-4xl md:text-7xl font-bold text-green-500">Lets Start The Game</h1>
          <p className="text-white my-10 text-lg font-semibold">The ultimate Game Race</p>
          <button className="px-3 py-2 w-fit mx-auto rounded-lg text-white font-bold bg-blue-500">Book Now</button>
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-xl relative" src="https://i.ibb.co/BGJM5JM/4.png" alt="" />
          <div className="bg-[#030303a4] flex flex-col justify-center absolute w-full h-full">
          <h1 className=" text-center text-4xl md:text-7xl font-bold text-green-500">Lets Start The Game</h1>
          <p className="text-white my-10 text-lg font-semibold">The ultimate Game Race</p>
          <button className="px-3 py-2 w-fit mx-auto rounded-lg text-white font-bold bg-blue-500">Book Now</button>
          </div>
          </SwiperSlide>
      </Swiper>
    </div>
  );
}

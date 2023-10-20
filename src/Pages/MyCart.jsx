import { useLoaderData } from "react-router-dom";
import CartCard from "../Components/Cart/CartCard";
import { useState } from "react";

const MyCart = () => {
  const dataArray = useLoaderData()
  const [updateCard,setUpdateCard] = useState(dataArray)
    console.log(dataArray);
    return (
        <div>
        <h1 className="text-2xl text-center font-bold text-green-500 my-10">
          Your Product Cart
        </h1>
        <div className="grid md:grid-cols-2 gap-5">
          {updateCard ? (
            updateCard?.map((card) => (
              <CartCard key={card._id} dataArray={dataArray} setUpdateCard={setUpdateCard} card={card}></CartCard>
            ))
          ) : (
            <p className="text-center text-2xl col-span-2 h-[30vh] w-full my-14 font-semibold text-red-400">
              Your Cart is Empty
            </p>
          )}
        </div>
      </div>
    );
};

export default MyCart;
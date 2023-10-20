import { useLoaderData } from "react-router-dom";
import CartCard from "../Components/Cart/CartCard";

const MyCart = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
        <h1 className="text-2xl text-center font-bold text-green-500 my-10">
          Your Product Cart
        </h1>
        <div className="grid md:grid-cols-2 gap-5">
          {data ? (
            data?.map((card) => (
              <CartCard key={card.id} card={card}></CartCard>
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
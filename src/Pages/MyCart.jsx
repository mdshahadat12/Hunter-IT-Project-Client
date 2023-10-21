import CartCard from "../Components/Cart/CartCard";
import { useEffect, useState } from "react";
import Loading from "../Components/Loading";

const MyCart = () => {

  const [dataArray,setDataArray] = useState([]);
  // const [updateArray,setUpdateArray] = useState(dataArray);
  const [updateCard,setUpdateCard] = useState(dataArray);
  const [load,setLoad] = useState(true)
    console.log(dataArray);
    console.log(updateCard);
    // console.log(updateArray);
    useEffect(()=>{
      fetch("https://hunter-it-server-irg2xm2pc-mdshahadat12.vercel.app/cart")
      .then(res=>res.json())
      .then(data=>{
        // console.log(data);
        setUpdateCard(data)
        setDataArray(data)
        setLoad(false)
      })

    },[])

    return load ? <Loading></Loading> : (
        <div>
        <h1 className="text-2xl text-center font-bold text-green-500 my-10">
          Your Product Cart
        </h1>
        <div className="grid md:grid-cols-2 gap-5">
          {updateCard.length > 0 ? (
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
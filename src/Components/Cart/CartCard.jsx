/* eslint-disable react/prop-types */

const CartCard = ({ card }) => {
    const { description, imglink, name,} = card || {};
    return (
          <div className="flex">
          <img className="w-[200px] rounded-l-lg" src={imglink} alt="" />
          <div className="p-5 flex-grow bg-green-300 rounded-r-lg">
            <h1 className="text-lg mt-3 font-semibold">{name}</h1>
            <p>{description.slice(0, 80)}</p>
            <button className="py-2 px-3 bg-orange-400 rounded-lg mt-5">Remove</button>
          </div>
        </div>
    );
  };
  
  export default CartCard;
  
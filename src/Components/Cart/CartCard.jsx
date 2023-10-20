/* eslint-disable react/prop-types */

const CartCard = ({ card,dataArray,setUpdateCard }) => {
  
  const handleRemove = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/cart/${id}`,{
      method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.deletedCount>0){
        const filterData = dataArray?.filter(data=> data._id !== id)
        setUpdateCard(filterData)
        alert('removed')
      }
    })
  };
  const { _id, description, imglink, name } = card || {};
  return (
    <div className="flex">
      <img className="w-[200px] rounded-l-lg" src={imglink} alt="" />
      <div className="p-5 flex-grow bg-orange-300 rounded-r-lg">
        <h1 className="text-lg mt-3 font-semibold">{name}</h1>
        <p>{description.slice(0, 80)}</p>
        <button
          onClick={() => handleRemove(_id)}
          className="py-2 px-3 bg-orange-600 text-white rounded-lg mt-5"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartCard;

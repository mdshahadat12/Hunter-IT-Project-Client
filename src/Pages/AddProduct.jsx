import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthProvider";
import { useContext } from "react";

const AddProduct = () => {
  const {IsDark} = useContext(AuthContext)
  const handlesubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const imglink = form.imglink.value;
    const name = form.name.value;
    const Bname = form.bname.value.toLowerCase();
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const formValue = {
      imglink,
      name,
      Bname,
      type,
      price,
      rating,
      description,
    };
    console.log(formValue);

    fetch(
      "https://hunter-it-server-irg2xm2pc-mdshahadat12.vercel.app/product",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValue),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("Good job!", "Successfuly Added!", "success");
        }
      });
  };
  return (
    <div className={`${IsDark ? 'bg-gray-900 text-white' : 'bg-orange-300' } p-10 my-10 rounded-lg`}>
      <h1 className="text-center font-bold text-3xl mb-5">Add Your Product</h1>
      <form onSubmit={handlesubmit}>
        <div className="flex gap-5">
          <div>
            <input
              type="text"
              className="p-3 mb-5 rounded-lg w-full outv"
              placeholder="Image Link"
              name="imglink"
            />
            <input
              type="text"
              className="p-3 rounded-lg w-full mb-5"
              placeholder="Name"
              name="name"
            />
            <input
              type="text"
              className="p-3 rounded-lg w-full"
              placeholder="Brand Name"
              name="bname"
            />
          </div>
          <div>
            <input
              type="text"
              className="p-3 mb-5 rounded-lg w-full"
              placeholder="Type"
              name="type"
            />
            <input
              type="number"
              className="p-3 rounded-lg w-full mb-5"
              placeholder="Price"
              name="price"
            />
            <input
              type="number"
              className="p-3 rounded-lg w-full"
              placeholder="Rating"
              name="rating"
            />
          </div>
        </div>
        <textarea
          name="description"
          className="p-3 rounded-lg w-full mt-5"
          placeholder="Write your Short Description..."
          rows="6"
        ></textarea>
        <div className="w-full flex justify-center mt-5">
          <input
            className="text-white py-2 px-4 bg-green-500 rounded-md w-1/2 cursor-pointer font-bold"
            type="submit"
            value="Add Product"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;

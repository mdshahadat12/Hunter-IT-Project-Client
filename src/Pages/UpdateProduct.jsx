import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
  const id = useParams();

  const handlesubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const imglink = form.imglink.value;
    const name = form.name.value;
    const Bname = form.bname.value;
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

    fetch(`http://localhost:5000/product/${id.id}`,{
      method:"PUT",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(formValue)
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
        alert('updated')
      });

  };
  console.log(id.id);
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/product/${id.id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, [id]);

  console.log(data);
  const { Bname, description, imglink, name, price, rating, type } = data || {};
  return (
    <div className="bg-orange-300 p-10 rounded-lg">
      <h1 className="text-center font-bold text-3xl mb-5">
        Update Your Product
      </h1>
      <form onSubmit={handlesubmit}>
        <div className="flex gap-5">
          <div>
            <input
              type="text"
              className="p-3 mb-5 rounded-lg w-full outv"
              placeholder="Image Link"
              name="imglink"
              defaultValue={imglink}
            />
            <input
              type="text"
              className="p-3 rounded-lg w-full mb-5"
              placeholder="Name"
              name="name"
              defaultValue={name}
            />
            <input
              type="text"
              className="p-3 rounded-lg w-full"
              placeholder="Brand Name"
              name="bname"
              defaultValue={Bname}
            />
          </div>
          <div>
            <input
              type="text"
              className="p-3 mb-5 rounded-lg w-full"
              placeholder="Type"
              name="type"
              defaultValue={type}
            />
            <input
              type="number"
              className="p-3 rounded-lg w-full mb-5"
              placeholder="Price"
              name="price"
              defaultValue={price}
            />
            <input
              type="number"
              className="p-3 rounded-lg w-full"
              placeholder="Rating"
              name="rating"
              defaultValue={rating}
            />
          </div>
        </div>
        <textarea
          name="description"
          defaultValue={description}
          className="p-3 rounded-lg w-full mt-5"
          placeholder="Write your Short Description..."
          rows="6"
        ></textarea>
        <div className="w-full flex justify-center mt-5">
          <input
            className="text-white py-2 px-4 bg-green-500 rounded-md w-1/2 cursor-pointer font-bold"
            type="submit"
            value="Update Product"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;

import axios from "axios";
import { toast } from "react-toastify";

const AddProduct = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = {
      name: e.target.name.value,
      price: e.target.price.value,
      image: e.target.image.value,
    };

    try {
      const { data } = await axios.post(
        "http://localhost:5000/products",
        product
      );
      console.log(data);
      if (!data.success) {
        toast.error(data.error);
      }
      toast.success(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="py-32 px-10 min-h-screen w-full">
      <div className="bg-white p-10 md:w-3/4 lg:w-1/2 mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center mb-5">
            <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
            />
          </div>

          <div className="flex items-center mb-5">
            <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
              Price
            </label>
            <input
              type="text"
              name="price"
              placeholder="price"
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
            />
          </div>

          <div className="flex items-center mb-10">
            <label
              className="inline-block w-40 mr-6 text-right
                                    font-bold text-gray-600"
            >
              Image
            </label>
            <input
              type="text"
              name="image"
              placeholder="url"
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
            />
          </div>

          <div className="text-right">
            <button className="py-3 px-8 bg-green-400 text-white font-bold">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

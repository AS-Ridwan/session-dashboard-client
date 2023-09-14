import { Card, Typography } from "@material-tailwind/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AllProducts = () => {
  const [product, setProduct] = useState([]);
  const TABLE_HEAD = ["Name", "Price", "Image", ""];
  useEffect(() => {
    try {
      // fetch("http://localhost:5000/product")
      //   .then((res) => res.json())
      //   .then((data) => setProduct(data));

      (async () => {
        const { data } = await axios.get("http://localhost:5000/product");
        if (!data?.success) {
          return toast.error(data.error);
        }
        setProduct(data.data);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <Card className="relative h-full w-[80vw] mx-5 overflow-x">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {product.map(({ name, price, image }, index) => {
              const isLast = index === product.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={index}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      $ {price}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <img className="w-40" src={image} alt="" />
                  </td>
                  <td className={classes}>
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      Edit
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default AllProducts;

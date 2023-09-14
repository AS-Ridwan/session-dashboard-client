import { Card, Typography } from "@material-tailwind/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const AllProducts = () => {
  const [product, setProduct] = useState([]);
  const TABLE_HEAD = ["Name", "Price", "Image", ""];
  useEffect(() => {
    try {
      fetch("http://localhost:5000/product")
        .then((res) => res.json())
        .then((data) => setProduct(data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <tp>
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
          </tp>
          <tbody>
            {product.map(({ name, price, image }, index) => {
              const isLast = index === product.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={name._id}>
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
                      {price}
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

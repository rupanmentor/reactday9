import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ setId }) => {
  const [data, setData] = useState([]);
  const [deleteData, setDeleteData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [deleteData]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://6904bdfb6b8dabde4964ef27.mockapi.io/products"
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (id) => {
    setId(id);
    navigate(`/edit/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `https://6904bdfb6b8dabde4964ef27.mockapi.io/products/${id}`
      );
      setDeleteData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-1 flex-wrap gap-6 mt-5">
      {data.map((ele) => {
        return (
          <div key={ele.productId}>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src={ele.productImage}
                  alt={ele.productName}
                />
              </a>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {ele.productName}
                </h5>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  ${ele.productPrice}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {ele.productDescription}
                </p>
                <button
                  type="button"
                  className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  onClick={() => handleEdit(ele.productId)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  onClick={() => handleDelete(ele.productId)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;

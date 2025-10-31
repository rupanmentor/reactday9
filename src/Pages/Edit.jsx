import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Edit = ({ id }) => {
  const [formData, setFormData] = useState({
    productName: "",
    productPrice: "",
    productDescription: "",
    productImage: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://6904bdfb6b8dabde4964ef27.mockapi.io/products/${id}`
      );
      setFormData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://6904bdfb6b8dabde4964ef27.mockapi.io/products/${id}`,
        formData
      );
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };
  return (
    <>
      <form className="max-w-sm mx-auto mt-5" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="productName"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Your Product Name"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="productPrice"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Product Price
          </label>
          <input
            type="text"
            id="productPrice"
            name="productPrice"
            value={formData.productPrice}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Your Product Price"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="productDescription"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Product Description
          </label>
          <input
            type="text"
            id="productDescription"
            name="productDescription"
            value={formData.productDescription}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Your Product Description"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="productImage"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Product Image
          </label>
          <input
            type="text"
            id="productImage"
            name="productImage"
            value={formData.productImage}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Your Product Image Url"
            required
          />
        </div>
        <button
          type="submit"
          className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Update
        </button>
      </form>
    </>
  );
};

export default Edit;

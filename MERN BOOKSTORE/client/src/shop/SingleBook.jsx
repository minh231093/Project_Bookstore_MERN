// import React from "react";
import { useLoaderData } from "react-router-dom";
import { MDBIcon } from "mdb-react-ui-kit";
import { useState } from "react";

const SingleBook = () => {
  const { bookTitle, imageURL, category, authorName, bookDescription, price } =
    useLoaderData();

  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (newQuantity) => {
    setQuantity(Math.max(1, newQuantity));
  };

  const handleQuantityChange = (change) => {
    updateQuantity(quantity + change);
  };
  const totalPrice = price * quantity;

  return (
    <div
      className="bg-white mt-10 ml-10 lg:flex lg:space-x-8"
      style={{ margin: "150px" }}
    >
      {/* Image */}
      <div
        className="card"
        style={{
          border: "none",
          minHeight: "800px",
          minWidth: "450px",
          marginRight: "50px",
        }}
      >
        <div className="row g-0">
          <div className="">
            <img
              src={imageURL}
              alt=""
              className="object-cover object-center rounded-lg book-image "
              style={{ minHeight: "800px", minWidth: "450px" }}
            />
          </div>
        </div>
      </div>

      {/* Title & Author*/}
      <div className="flex-1">
        <div className="max-w-2xl px-0 pb-16 pt-10 sm:px-6">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {bookTitle}
          </h1>
          <p
            className="text-3xl tracking-tight text-gray-900 "
            style={{ fontSize: "100%" }}
          >
            {authorName}
          </p>
        </div>

        {/* Description */}
        <div className="py-10">
          <div>
            <h2 className="text-sm font-medium text-gray-900 mb-4">
              Tóm tắt nội dung
            </h2>
            <div className="space-y-6">
              <p className="text-base text-gray-900">{bookDescription}</p>
            </div>
          </div>

          {/* Category */}
          <div className="mt-10">
            <h2 className="text-sm font-medium text-gray-900">Thể loại</h2>
            <div className="mt-4">
              <ul role="list" className="list-disc space-y-2 pl-0 text-sm">
                {category}
              </ul>
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-10">
            <label className="text-sm font-medium text-gray-900">
              Số lượng
            </label>
            <div className="mt-2 flex items-center">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="text-teal-500 hover:text-teal-700 focus:outline-none focus:ring focus:border-teal-300 rounded-md px-3 py-1 mr-1"
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                onChange={(e) =>
                  updateQuantity(parseInt(e.target.value, 10) || 1)
                }
                className="w-12 border border-teal-500 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring focus:border-teal-300"
              />
              <button
                onClick={() => handleQuantityChange(1)}
                className="text-teal-500 hover:text-teal-700 focus:outline-none focus:ring focus:border-teal-300 rounded-md px-3 py-1 ml-1"
              >
                +
              </button>
            </div>
          </div>

          {/* Total Price */}
          <div className="mt-10">
            <h2 className="text-sm font-medium text-gray-900">Tổng tiền</h2>
            <div className="mt-4">
              <span className="text-sm">{totalPrice} VND</span>
            </div>
          </div>

          <button
            type="submit"
            className="mt-10 flex w-1/3 items-center justify-center rounded-md border border-transparent bg-teal-500 px-3 py-3 text-base font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Thêm vào giỏ hàng
            <MDBIcon fas icon="shopping-cart" className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default SingleBook
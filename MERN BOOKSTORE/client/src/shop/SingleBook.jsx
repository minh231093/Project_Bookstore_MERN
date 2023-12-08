// import React from "react";
import { useLoaderData } from "react-router-dom";
// import { useState } from "react";

const SingleBook = () => {
  const { bookTitle, imageURL, category, authorName, bookDescription } =
    useLoaderData();

  return (
    <div
      className="bg-white mt-10 ml-10 lg:flex lg:space-x-8"
      style={{ margin: "150px" }}
    >
      {/* Image */}
      <div className="lg:flex-none ">
        <img
          src={imageURL}
          alt="Book cover"
          className="h-full w-full object-cover object-center rounded-lg book-image"
        />
      </div>

      {/* Title & Author*/}
      <div className="flex-1">
        <div className="max-w-2xl px-4 pb-16 pt-10 sm:px-6">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {bookTitle}
          </h1>
          <p
            className="text-3xl tracking-tight text-gray-900"
            style={{ fontSize: "100%" }}
          >
            {authorName}
          </p>
        </div>

        {/* Description */}
        <div className="py-10">
          <div>
            <h2 className="text-sm font-medium text-gray-900 mb-5">
              Description
            </h2>
            <div className="space-y-6">
              <p className="text-base text-gray-900">{bookDescription}</p>
            </div>
          </div>

          {/* Category */}
          <div className="mt-10">
            <h2 className="text-sm font-medium text-gray-900">Categories</h2>
            <div className="mt-4">
              <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                {category}
              </ul>
            </div>
          </div>

          <button
            type="submit"
            className="mt-10 flex w-1/3 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
};
export default SingleBook;

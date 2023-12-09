// import React from 'react'
import FavBookImg from "../assets/banner-img/FAVBook.jpg";

const FavBook = () => {
  return (
    <div className="px-4 lg:px-24 my-20">
      <div>
        <img src={FavBookImg} alt="Book" className="rounded md:w-10/22" />
      </div>

      <div className="md:w-1/2 space-y-6">
        <h2 className="text-5xl font-bold my-5 md:w-3/4 leading-snug">
          Find your favorite <span className="text-blue-700">Book here!</span>
        </h2>
        <p className="mb-10 text-lg md:w-5/6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
          reiciendis non dolorum voluptates illo, officia error illum saepe
          atque adipisci iste excepturi quia nihil, dolore aspernatur pariatur
          velit debitis asperiores.
        </p>
        <div>
          <div>
            <h3 className="text-3xl font-bold">800+</h3>
            <p className="text-base">Book listings</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">1000+</h3>
            <p className="text-base">Users</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">10000+</h3>
            <p className="text-base">PDF Downloads</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavBook;

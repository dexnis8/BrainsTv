/* eslint-disable no-unused-vars */
import React from "react";
import product from "../assets/product.webp";

const Super = () => {
  return (
    <>
      <div className=" super mt-28 lg:mt-40">
        <div className="lg:w-[1200px] flex flex-col-reverse lg:grid grid-cols-2  mx-auto w-full px-2 md:px-0 py-5 ">
          <div className=" p-12 text-center lg:text-left flex flex-col gap-6 text-primary-200 ">
            <h1 className=" text-4xl text-white sm:text-6xl font-bold">
              Odogwu A.I is here
            </h1>
            <span className=" text-2xl sm:text-4xl font-bold">
              Your Automated blog builder and SEO optimization has arrived on
              planet Earth.
            </span>
            <button className="py-3 px-12 text-primary-800 font-semibold text-xl rounded-lg hover:opacity-75 transition-opacity bg-white border lg:self-start">
              Try Odogwu A.I today
            </button>
          </div>
          <div className="">
            <img src={product} alt="img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Super;

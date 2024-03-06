/* eslint-disable no-unused-vars */
import React from "react";
import ReactPlayer from "react-player";
import img from "../assets/img1.webp";
import stroke from "../assets/bt-stroke.webp";

const Campaign = () => {
  const colors = [
    "bg-[#FAE0FF]",
    "bg-[#E5E9FB]",
    "bg-[#D5FDF9]",
    "bg-[#DDFEDF]",
    "bg-[#FAE0FF]",
    "bg-[#E5E9FB]",
    "bg-[#D5FDF9]",
    "bg-[#DDFEDF]",
    "bg-[#FFE7EB]",
    "bg-[#FFF6DD]",
  ];
  return (
    <>
      <div className="flex text-center bg-white rounded-lg shadow flex-col gap-12">
        <div className="bg-primary-800 py-6">
          <h1 className=" text-white  text-3xl md:text-5xl font-bold w-[85%] md:w-[70%] mx-auto ">
            Here are the detailed steps on how to get started
          </h1>
        </div>

        <div className="steps w-[100%] mb-4 shadow-lg mx-auto lg:w-[1200px] border rounded-lg ">
          <div className=" w-full flex flex-col lg:grid lg:grid-cols-2">
            {/* One card(left) */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, idx) =>
              idx % 2 === 0 ? (
                <div
                  key={idx}
                  className={`${colors[item]} flex flex-col sm:grid sm:grid-cols-3 gap-6 items-center p-6 lg:p-12  border`}
                >
                  <div className="icon w-[250px] sm:w-full h-[150px] bg-slate-600 rounded-lg overflow-hidden shadow ">
                    img
                  </div>
                  <div className="text-center sm:text-left lg:text-right col-span-2 flex flex-col gap-2">
                    <h2 className="text-3xl font-bold text-primary-800 ">
                      Odogwu creates incredible blogs
                    </h2>
                    <p className="font-Poppins text-sm ">
                      Just copy, paste your info into the FB Ads Editor or
                      wherever you want. Your Landing Page Copy and Email Follow
                      up Series Are Automatically product.
                    </p>
                  </div>
                </div>
              ) : (
                <div
                  key={idx}
                  className={`${colors[item]}  flex flex-col-reverse sm:grid sm:grid-cols-3 gap-6 items-center p-6 lg:p-12  border `}
                >
                  <div className="text-center sm:text-left col-span-2 flex flex-col gap-2">
                    <h2 className="text-3xl font-bold text-primary-800 ">
                      Odogwu creates incredible blogs
                    </h2>
                    <p className="font-Poppins text-sm ">
                      Just copy, paste your info into the FB Ads Editor or
                      wherever you want. Your Landing Page Copy and Email Follow
                      up Series Are Automatically product.
                    </p>
                  </div>
                  <div className="icon w-[250px] sm:w-full h-[150px] bg-slate-800 rounded-lg overflow-hidden shadow ">
                    img
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Campaign;

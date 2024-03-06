/* eslint-disable no-unused-vars */
import React from "react";
import ReactPlayer from "react-player";
import img from "../assets/img1.webp";
import stroke from "../assets/bt-stroke.webp";

const Steps = () => {
  return (
    <>
      <div className="flex text-center bg-white rounded-lg shadow flex-col gap-12">
        <div className="bg-800 py-6">
          <h1 className="text-primary-800  text-3xl md:text-5xl font-bold w-[85%] md:w-[60%] mx-auto ">
            Here are the detailed steps on how to get started
          </h1>
        </div>

        <div className="steps w-[100%] mb-4 shadow-lg mx-auto lg:w-[1200px] border rounded-lg overflow-hidden">
          {/* from here */}
          {[1, 2, 3, 4].map((item, idx) => (
            <>
              {idx % 2 === 0 ? (
                <div className="py-3 lg:py-0 border-b-1 border border-b-white border-r-0 border-l-0 border-t-0 flex  flex-col gap-5 lg:gap-0 lg:grid grid-cols-2 items-center">
                  <div className="p-2 lg:p-12 flex flex-col gap-12">
                    <div className="flex w-[100%] justify-center lg:justify-end ">
                      <button className="uppercase py-3 px-12 text-xl rounded-lg font-bold font-Poppins text-white bg-primary-800 cursor-text self-start ">
                        step {idx + 1}
                      </button>
                    </div>
                    <div className="bg-slate-600 rounded-lg overflow-hidden w-full  h-[300px]">
                      {/* <ReactPlayer
                        url="https://www.youtube.com/watch?v=O53dIDTIaAY"
                        width="100%"
                        height="100%"
                        controls={true}
                        // playing={true}
                        playsinline
                        muted={true}
                        loop={true}
                      /> */}
                      <img src={img} alt="" className="w-full h-full" />
                    </div>
                  </div>
                  <div className="p-2 lg:p-12 text-left flex flex-col gap-6 ">
                    <h2 className="text-4xl font-semibold text-primary-800">
                      Get the Web App
                    </h2>
                    <p className="text-lg text-black font-Poppins">
                      Select your Campaign in ‘ 1 click” from JV Zoo, Clickbank
                      or Warrior plus OR Enter any website address.
                    </p>
                    <div>
                      <img src={stroke} alt="bt-stroke" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="py-3 lg:py-0 border-b-1 border border-b-white border-r-0 border-l-0 border-t-0 flex flex-col-reverse gap-5 lg:gap-0 lg:grid grid-cols-2 items-center">
                  <div className="p-2 lg:p-12 text-left flex flex-col gap-6 ">
                    <h2 className="text-4xl font-semibold text-primary-800">
                      Choose a plan
                    </h2>
                    <p className="text-lg text-black font-Poppins">
                      Select your Campaign in ‘ 1 click” from JV Zoo, Clickbank
                      or Warrior plus OR Enter any website address.
                    </p>
                    <div>
                      <img src={stroke} alt="bt-stroke" />
                    </div>
                  </div>
                  <div className="p-2 lg:p-12 flex flex-col gap-12 ">
                    <div className="flex w-[100%] mx-auto lg:justify-start justify-center">
                      <button className="uppercase border py-3 px-12 text-xl rounded-lg font-bold font-Poppins text-white bg-primary-800 cursor-text self-start ">
                        step {idx + 1}
                      </button>
                    </div>
                    <div className="bg-slate-600 rounded-lg overflow-hidden w-full border h-[300px]">
                      {/* <ReactPlayer
                        url="https://www.youtube.com/watch?v=O53dIDTIaAY"
                        width="100%"
                        height="100%"
                        controls={true}
                        // playing={true}
                        playsinline
                        muted={true}
                        loop={true}
                      /> */}
                      <img src={img} alt="" className="w-full h-full" />
                    </div>
                  </div>
                </div>
              )}
            </>
          ))}
          {/* to here */}
        </div>
      </div>
    </>
  );
};

export default Steps;

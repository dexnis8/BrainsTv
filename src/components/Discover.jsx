// import React from "react";
import ReactPlayer from "react-player";
import img from "../assets/m.webp";

const Discover = () => {
  return (
    <>
      <div className="flex text-center flex-col gap-12">
        <div className="bg-primary-800 py-6">
          <h1 className="text-white  text-3xl md:text-5xl font-bold w-[85%] md:w-[70%] mx-auto ">
            Discover The Power of Super Affiliate A.I - Individual Amazing
            Features
          </h1>
        </div>

        <div className="w-[100%] shadow-lg mx-auto lg:w-[1200px] border rounded-lg overflow-hidden bg-slate-200">
          {/* from here */}
          {[1, 2, 3, 4].map((item, idx) => (
            <>
              {idx % 2 === 0 ? (
                <div className="flex  flex-col gap-5 lg:gap-0 lg:grid grid-cols-2 items-center">
                  <div className="p-2 lg:p-12 flex flex-col gap-12  lg:border border-primary-800 lg:border-l-0 lg:border-t-0 lg:border-b-0  lg:border-r-2 lg:border-dashed">
                    <div className="flex w-[60%] mx-auto">
                      <img
                        src="https://superaffiliate.ai/offer/wp-content/uploads/2023/06/fb-arrow.png.webp"
                        alt=""
                      />
                    </div>
                    <div className="bg-slate-600 rounded-lg overflow-hidden w-full border h-[300px]">
                      <ReactPlayer
                        url="https://www.youtube.com/watch?v=O53dIDTIaAY"
                        width="100%"
                        height="100%"
                        controls={true}
                        // playing={true}
                        playsinline
                        muted={true}
                        loop={true}
                      />
                    </div>
                  </div>
                  <div className="p-2 lg:p-12 border text-left flex flex-col gap-6 ">
                    <h2 className="text-4xl font-semibold">Facebook Ads</h2>
                    <ul className="list-image-[url('')] list-disc ">
                      {[1, 2, 3, 4, 5].map((item, idx) => (
                        <li
                          key={idx}
                          className={`text-base mb-3 ${
                            idx % 2 === 0 ? "font-semibold" : "font-normal"
                          } font-Poppins`}
                        >
                          Generate Incredible A.I FB Ads - Point, Click and
                          build - no thinking required!
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className=" flex flex-col-reverse gap-5 lg:gap-0 lg:grid grid-cols-2 items-center">
                  <div className="p-2 lg:p-12 lg:border border-primary-800 lg:border-l-0 lg:border-t-0 lg:border-b-0  lg:border-r-2 lg:border-dashed text-left flex flex-col gap-6 ">
                    <h2 className="text-4xl font-semibold">Facebook Ads</h2>
                    <ul className="list-image-[url('')] list-disc ">
                      {[1, 2, 3, 4, 5].map((item, idx) => (
                        <li
                          key={idx}
                          className={`text-base mb-3 ${
                            idx % 2 === 0 ? "font-semibold" : "font-normal"
                          } font-Poppins`}
                        >
                          Generate Incredible A.I FB Ads - Point, Click and
                          build - no thinking required!
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-2 lg:p-12 flex flex-col gap-12 ">
                    <div className="flex w-[60%] mx-auto">
                      <img
                        src="https://superaffiliate.ai/offer/wp-content/uploads/2023/06/fb-arrow.png.webp"
                        alt=""
                      />
                    </div>
                    <div className="bg-slate-600 rounded-lg overflow-hidden w-full border h-[300px]">
                      <ReactPlayer
                        url="https://www.youtube.com/watch?v=O53dIDTIaAY"
                        width="100%"
                        height="100%"
                        controls={true}
                        // playing={true}
                        playsinline
                        muted={true}
                        loop={true}
                      />
                    </div>
                  </div>
                </div>
              )}
            </>
          ))}
          {/* to here */}
        </div>
      </div>

      <div className="w-full shadow mx-auto lg:w-[1000px] border rounded-lg  bg-white h-[500px] p-2 sm:p-6 md:p-12 ">
        <div>
          <div className="text-center text-primary-800 flex flex-col gap-5 mx-auto sm:w-[80%] w-[90%]">
            <h1 className=" text-3xl sm:text-5xl font-bold">
              Access 100’s Of Hot Converting Affiliate Offers in ONE Click
            </h1>
            <span className=" text-xl sm:text-4xl">
              1 Click Access direct from inside the software Clickbank - JV Zoo
              - Warrior Forum
            </span>
          </div>
          <div className="h-[350px] overflow-hidden rounded-lg w-full border shadow-lg text-center text-white translate-y-[20%] bg-primary-800">
            <img src={img} alt="img" className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Discover;

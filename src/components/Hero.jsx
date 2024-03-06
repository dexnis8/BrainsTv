/* eslint-disable react/no-unescaped-entities */
// import React from "react";
import ReactPlayer from "react-player";
// import lauch from '/'

const Hero = () => {
  return (
    <>
      <div className="hero w-full lg:w-[1024px] xl:w-[1200px] mx-auto border flex gap- py-5 justify-center items-center flex-col text-center ">
        <div className="flex items-center gap-3">
          <span className=" h-[50px] w-[50px] flex justify-center text-white items-center p-3 bg-primary-800 rounded-full  ">
            {/* <img src="" alt="logo" className="w-full h-full" />
             */}
            logo
          </span>
          <h2 className="text-4xl font-bold">Odogwu</h2>
        </div>
        <p className="text-lg sm:text-2xl font-medium">
          The next Generation of A.I blogging is now here...{" "}
        </p>
        <div className="flex flex-col gap-3">
          <h1 className=" text-6xl  md:text-8xl font-bold">
            Meet <span className="text-primary-800">Odogwu A.I</span>
          </h1>
          <p className=" text-2xl sm:text-4xl w-[85%] font-semibold lg:w-[70%] mx-auto ">
            The #1 A.I Tool That Can Build Your Blogs, Ads & Funnel Content In
            Less Than 60 Seconds.
          </p>
          <span className="text-xl sm:text-3xl my-5 italic font-medium">
            Never Spend a Dime on Human Work Ever Again!
          </span>
        </div>
        <div className="flex flex-col-reverse lg:grid bg-primary-800 text-primary-200  px-0  overflow-hidden w-full rounded-t-lg gap-5 lg:grid-cols-5">
          <div className=" col-span-2 py-5 px-5 w-full">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="mb-2">
                <div className="h-[50px] mb-2 text-xl font-bold mx-auto w-[50px] rounded-[100%] bg-white text-primary-800 flex justify-center items-center ">
                  {item}
                </div>
                <div>
                  <p className="">
                    <strong className="text-lg text-primary-600 font-DarkerGrotesque">
                      Save 1000's in human{" "}
                    </strong>
                    <p className="text-sm w-[70%] mx-auto font-Poppins">
                      outsourcing fee’s tsourcing fee’s and days turnaround time
                    </p>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className=" col-span-3 h-[300px] lg:h-full  w-full bg-primary-200 text-white">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=O53dIDTIaAY"
              width="100%"
              height="100%"
              controls={true}
              playing={true}
              playsinline
              muted={true}
              loop={true}
            />
          </div>
        </div>

        {/* <div className="w-full clip-arr bg-white relative flex lg:grid p-2 sm:p-5  border-t-none grid-cols-6 rounded-b-lg shadow justify-between items-center">
          <div className="col-span-2 hidden lg:block">
            <img
              src="https://superaffiliate.ai/offer/wp-content/uploads/2023/06/lauch-special.png.webp"
              alt="lauch-special"
            />
          </div>
          <div className="lg:ml-5  text-left gap-8 sm:col-span-4 flex flex-col">
            <h4 className=" sm:w-full w-[90%]  text-3xl font-semibold">
              One Time Payment - No Monthly Fees EVER!
              <br />
              (Special) during launch period
            </h4>
            <button className="py-3 px-12 text-white text-lg rounded-lg hover:opacity-75 transition-opacity bg-primary-800 border self-start">
              Try Odogwu A.I today
            </button>
          </div>
        </div> */}
        <div className="flex my-8 flex-col gap-12">
          <h1 className=" text-3xl md:text-5xl font-bold w-[85%] md:w-[70%] mx-auto ">
            We just figured out over 3000+ of the most powerful blog prompts and
            built them into the ultimate <strong>Odogwu A.I.</strong>
          </h1>
          <div className=" p-2 sm:p-8 bg-primary-600 rounded-lg flex flex-col lg:grid lg:grid-cols-2 gap-8">
            {[1, 2].map((item) => (
              <div
                key={item}
                className="border px-2 py-4  sm:p-8 rounded-lg shadow bg-white flex flex-col gap-12"
              >
                <h2 className="text-center text-3xl mx-auto w-[90%] font-semibold">
                  “I’m blown way! - As a father of 7 this saves me the most
                  precious thing - Time!
                </h2>
                <div className="w-full overflow-hidden border bg-slate-800  rounded-lg h-[300px]">
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
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

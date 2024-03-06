// import React from "react";
import ReactPlayer from "react-player";

const DemoVideo = () => {
  return (
    <>
      <div className="flex text-center flex-col gap-12">
        <div className="bg-primary-800 py-6">
          <h1 className="text-white  text-3xl md:text-5xl font-bold w-[85%] md:w-[70%] mx-auto ">
            Watch a Detailed Demo Of Odogwu A.I
          </h1>
        </div>

        <div className="w-full shadow mx-auto lg:w-[1000px] border rounded-lg overflow-hidden bg-slate-600 h-[500px]">
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
    </>
  );
};

export default DemoVideo;

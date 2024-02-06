import React from "react";

export default function Page() {
  return (
    <main className="relative overflow-x-clip">
      <img
        src="image\background\background.png"
        className="w-screen h-screen absolute z-0 align-bottom scale-[138%]"
      />
      <img
        src="image\background\clouds.png"
        className=" w-screen h-screen absolute z-10 -top-16 clouds"
      />
      <img
        src="image\background\birds.png"
        className=" w-screen h-screen absolute z-20 -top-16 birds"
      />
      <div className="flex flex-col absolute h-screen items-start justify-center lg:px-32 px-8 py-16 z-20 -translate-y-8 translate-x-16">
        <div className="flex items-center justify-between grow">
          <div className="sm:w-5/12">
            <h2 className="bold text-4xl py-1 text-[#1E5B85]">
              Lorem ipsum
              <br />
              dolor sit amet
            </h2>
            <h2 className="medium text-base text-[#1E5B85] py-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </h2>
          </div>
        </div>
        <div className="flex absolute items-center bottom-16 sm:left-40 sm:bottom-24 border-dashed rounded-lg border-white border-2 px-3 py-3">
          <p className="bold absolute top-0 left-0 text-white text-base -mt-3 -ml-1 pr-2 bg-[#A8E25E]">
            Know More:
          </p>
          <button className="medium bg-[#78A3F3] hover:bg-[#6b95e3] text-white px-2 py-1 mx-2 rounded-md z-20 duration-200">
            as student
          </button>
          <button className="medium bg-[#BF8FFD] hover:bg-[#b081ed] text-white px-2 py-1 mx-2 rounded-md z-20 duration-200">
            as parent
          </button>
          <button className="medium bg-[#F9A587e7] hover:bg-[#ea8f6d] text-white px-2 py-1 mx-2 rounded-md z-20 duration-200">
            as educators
          </button>
        </div>
      </div>
      <div className="h-screen w-screen absolute">
        <img
          src="image/background/sprites.svg"
          alt="sprites"
          className="w-[32%] z-30 absolute right-[14%] bottom-[15%]"
        />
      </div>
    </main>
  );
}

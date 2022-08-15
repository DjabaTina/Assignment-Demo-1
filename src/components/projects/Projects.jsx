import React from "react";

const Projects = () => {
  return (
    <div>
      <div className=" h-[80vh] w-full flex justify-evenly">
        <div id="ll" className=" h-[75vh] w-[25vw] mt-4"></div>
        <div className=" h-[75vh] w-[60vw]">
          <p className="mx-80 text-gray-500 text-xm font-semibold">LATEST</p>
          <p className="mx-60 text-gray-500 text-xl mt-3 font-semibold">
            THE LATEST FROM THE BLOG
          </p>
          <div className="flex justify-evenly mt-3">
            <div id="oo" className=" w-[20vw] h-[30vh]">
              
            </div>

            

            <div className=" w-[20vw] h-[30vh]">
              <p className="text-xm font-medium text-gray-500 font-serif mt-3">
                LOREM ISPUM DOLOR SIT AMET.
              </p>
              <p className="text-gray-800 font-serif mt-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet possimus pariatur dolores tempora, ratione, soluta error
                similique?
              </p>
            </div>
          </div>
          <div className="flex justify-evenly mt-8">
            <div className=" w-[20vw] h-[30vh]">
              <p className="text-xm font-medium text-gray-500 font-serif mt-3">
                LOREM ISPUM DOLOR SIT AMET.
              </p>
              <p className="text-gray-800 font-serif mt-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet possimus pariatur dolores tempora, ratione, soluta error
                similique?
              </p>
            </div>
            <div id="ff" className=" w-[20vw] h-[30vh]"></div>
          </div>
        </div>
      </div>
      <div className=" h-[70vh] w-full mx-auto border-2 bg-amber-900">
        <div className="h-[60] w-[69vw] ml-60 ">
          <p className="ml-96 mt-5 text-xl font-serif border-amber-900 text-gray-500 ">
            SIGN UP TO BOOK A DATE
          </p>
          <div className="">
            <input
              type=""
              placeholder="Type your name"
              className="h-10 bg-amber-900 py-2 px-5 mt-8 ml-16 w-[30vw] border"
            />
          </div>
          <input
            type=""
            placeholder="Type your E-mail"
            className="h-10 bg-amber-900 py-2 px-5 w-[30vw] ml-16 mt-8 border"
          />
          <input
            type=""
            placeholder="Type your Password"
            className="h-10 bg-amber-900 py-2 px-5 w-[30vw] ml-16 mt-8 border"
          />
        </div>
        <button className=" w-[20vw] h-10 bg-amber-200 ml-96  mt-14 text-gray-500">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Projects;

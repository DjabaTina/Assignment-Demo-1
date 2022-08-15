import React from "react";
import { RiBlazeLine } from "react-icons/ri";

const Header = () => {
  return (
    <div>
      <div className="w-full h-[80vh] ">
        <div id="tt" className="h-[80vh] bg-blend-overlay ">
          <p className=" border w-[40vw] h-[10vh] mx-72 ">
            <p className="text-xl font-semibold text-black bg-gray-300 mt-60 w-[45vw] py-3 px-5 h-14 font-serif">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            <p className="text-xl font-semibold text-black bg-gray-300 mx-16 py-3 mt-3 px-8 font-serif border-2 w-[30vw] h-14">
              tur consequuntur in voluptas.
            </p>
          </p>
        </div>
      </div>
      <div className="w-full h-[90vh] flex justify-evenly mt-14">
        <div className="w-[50vw] h-[80vh] ">
          <p className="font-bold text-xl font-serif text-gray-500 mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          </p>
          <button className="h-8 w-[10vw] rounded-xl mt-5 bg-amber-900 font-bold text-gray-500 hover:bg-blue-500">
            Contact us
          </button>
          <div className="flex">
            <div id="vv" className="w-[20vw] h-[40vh] my-14"></div>
            <div id="ss" className="w-[20vw] h-[40vh] ml-14 "></div>
          </div>
        </div>
        <div id="yy" className="w-[20vw] mt-8 mr-14 h-[40vh] border-2"></div>
      </div>
      <div className=" h-[40vh] w-full bg-gradient-to-r from-sky-800 md:from-purple-200 mb-14">
        <div className="mx-auto">
          <RiBlazeLine size={30} className="mx-auto mt-20" />
          <p className="font-bold text-xl mx-96 mt-6 text-gray-500">
            Lorem ipsum dolor sit amet consectetur
          </p>
          <p className="font-bold text-xl mx-60 mt-2 text-gray-500">
            adipisicing elit. Vel distinctio hic ipsum porro aliquam consectetur
            voluptatibus
          </p>
          <p className="text-gray-500 text-xm mx-96 font-thin  mt-2">
            omnis autem pariatur dolor
          </p>
          <RiBlazeLine size={30} className="mx-auto mt-0" />
        </div>
      </div>
      <div className="h-[70vh] w-[60vw] mx-auto flex">
        <div id="tt" className=" h-[60vh] w-[20vw] mx-auto"></div>
        <div className=" h-[50vh] w-[25vw] mx-auto">
          <p className="font-semibold text-xm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            similique neque nam, nisi voluptatem eligendi nostrum quidem.
          </p>
          <p className="font-semibold text-xm text-gray-500 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            similique neque nam, nisi voluptatem eligendi nostrum quidem ullam
            placeat hic porro quas minima laudantium ipsa a quia rem saepe
            aperiam!
          </p>
          <button className="w-[15vw] h-12 mt-6 text-gray-500 font-bold hover:bg-amber-900 border-2 bg-amber-900">
            Our Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

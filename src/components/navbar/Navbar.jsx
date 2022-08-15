import React from "react";
import { FaFacebook } from "react-icons/fa";
import {AiOutlineInstagram} from "react-icons/ai"
import {AiOutlineTwitter} from "react-icons/ai"
import {TbBrandTelegram} from "react-icons/tb"

const Navbar = () => {
  return (
    <div className="w-full h-[10vh]  flex ">
      <div className=" h-[10vh] w-[20vh]">
        <div className="flex justify-between">
          <p className="text-2xl font-semibold italic mx-14 my-4 font-serif ">Tina</p>
          <p className="mx-14 my-4">Home</p>
          <p className="mx-14 my-4">Services</p>
          <p className="mx-14 my-4">Contact</p>
          <p className="mx-14 my-4">Profile</p>
          <div className="flex ml-60 ">
            <FaFacebook size={20} className="mx-4 my-4" />
            <AiOutlineInstagram size={20} className="mx-4 my-4" />
            <AiOutlineTwitter size={20} className="mx-4 my-4" />
            <TbBrandTelegram size={20} className="mx-4 my-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

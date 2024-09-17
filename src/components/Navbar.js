import React from "react";
import logo from "./Images/logo.png";
import user from "./Images/user.png";
import { CiSearch } from "react-icons/ci";
import { IoMenuOutline } from "react-icons/io5";
import { CiMicrophoneOn } from "react-icons/ci";
import { RiVideoAddLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex  justify-between py-2 px-6 ">
      <div className=" flex space-x-4 item-center">
        <IoMenuOutline className="text-2xl cursor-pointer" />
        <img src={logo} className="  w-[90px] h-[20px] cursor-pointer" />
      </div>
      {/* .............................................Nav-2 */}

      <div className=" flex  w-[35%] h-10  mr-16 ">
        <input
          type="text"
          className="border border-gray-300 rounded-l-full flex-grow-1 w-[95%] px-3 outline-none"
          placeholder="search..."
        />
        <button className="px-4 py-2 rounded-r-full border-gray-300 border-2 ">
          <CiSearch size={"24"} />
        </button>

        <CiMicrophoneOn
          size={"50px"}
          className="ml-3   rounded-full p-2 cursor-pointer pb-5 hover:bg-gray-300 "
        />
      </div>

      {/* ....................................................nav-3........................................................... */}
      <div className="flex space-x-5 items-center mr-7 cursor-pointer">
        <RiVideoAddLine className=" w-[24px] h-[24px]" />
        <FaRegBell className=" w-[24px] h-[24px]" />
        <img src={user} className="w-[32px] h-[32px]" />
      </div>
    </div>
  );
};

export default Navbar;

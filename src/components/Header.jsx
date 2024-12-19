import React from "react";
import { IoIosContacts } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { FaPlusCircle } from "react-icons/fa";
const Header = () => {
  return (
    <div className="flex gap-2 h-[100px] justify-center">
      <div className="flex items-center ">
        <IoIosContacts className="text-white text-4xl" />
      </div>
      <div className="flex relative items-center">
        <IoSearch className=" ml-1 text-white text-2xl absolute" />
        <input
          type="text"
          placeholder="Search Contact"
          className=" focus:outline-none pl-8 text-white bg-transparent  border border-white rounded-md h-9 flex-grow px-4 text-sm"
        />
      </div>

      <button>
        <FaPlusCircle className=" text-4xl text-white cursor-pointer " />
      </button>
    </div>
  );
};

export default Header;

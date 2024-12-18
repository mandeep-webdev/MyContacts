import React from "react";

import { IoSearch } from "react-icons/io5";
import { FaPlusCircle } from "react-icons/fa";
const Header = () => {
  return (
    <div className="flex gap-2 h-[100px] justify-center">
      <div className="flex flex-grow relative items-center">
        <IoSearch className=" ml-1 text-white text-2xl absolute" />
        <input
          type="text"
          placeholder="Search Contact"
          className=" pl-8 text-white bg-transparent  border border-white rounded-md h-9 flex-grow px-4 text-sm"
        />
      </div>

      <button>
        <FaPlusCircle className=" text-4xl text-white" />
      </button>
    </div>
  );
};

export default Header;

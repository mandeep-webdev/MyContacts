import React from "react";
import { IoIosContacts } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { FaPlusCircle } from "react-icons/fa";
const Header = ({ setModeValue, openModal }) => {
  const handleAdd = () => {
    openModal();
    setModeValue("add");
  };
  return (
    <div className="flex justify-around gap-2 h-[100px] ">
      {/* <div className="flex items-center pl-2 ">
        <IoIosContacts className="text-white text-7xl" />
      </div> */}
      <div className="flex relative items-center flex-grow ml-3">
        <IoSearch className=" ml-1 text-white text-2xl absolute" />
        <input
          type="text"
          placeholder="Search Contact"
          className=" focus:outline-none pl-8 text-white bg-transparent  border border-white rounded-md h-9 flex-grow px-4 text-sm"
        />
      </div>

      <button className=" text-center w-[52px]" onClick={handleAdd}>
        <FaPlusCircle className=" text-4xl text-white cursor-pointer ml-1 " />
      </button>
    </div>
  );
};

export default Header;

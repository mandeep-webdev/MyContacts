import React from "react";

const CustomButtons = ({ type, closeModal }) => {
  return (
    <div className="flex justify-end gap-2 py-2">
      <button
        className="border border-transparent px-2 rounded-md cursor-pointer hover:text-red-700 transition duration-300"
        onClick={closeModal}
      >
        Cancel
      </button>
      <button className=" border bg-blue-500 hover:bg-blue-600 transition duration-300 text-white p-2 rounded-md cursor-pointer">
        {type}
      </button>
    </div>
  );
};

export default CustomButtons;

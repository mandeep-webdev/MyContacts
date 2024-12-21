import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ closeModal }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return createPortal(
    <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm">
      <div className=" bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-semibold mb-2 text-slate-600 text-center">
          Add New Contact
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-600 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter name"
              className="border w-full border-slate-800 p-2 rounded-md outline-none text-slate-600"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-slate-600 mb-1"
            >
              Mobile
            </label>
            <input
              type="text"
              id="mobile"
              placeholder="Enter mobile number"
              className="border w-full border-slate-800 p-2 rounded-md outline-none text-slate-600"
            />
          </div>
          <div className="flex justify-end gap-2 py-2">
            <button
              className="border border-transparent px-2 rounded-md cursor-pointer hover:text-red-700 transition duration-300"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button className=" border bg-blue-500 hover:bg-blue-600 transition duration-300 text-white p-2 rounded-md cursor-pointer">
              Add Contact
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;

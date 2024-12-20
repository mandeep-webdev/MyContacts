import React from "react";
import { IoMdClose } from "react-icons/io";
const Modal = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Add New Contact</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              placeholder="Enter name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-gray-700"
            >
              Mobile Number
            </label>
            <input
              type="text"
              id="mobile"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              placeholder="Enter mobile number"
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 text-black rounded-md"
              onClick={closeModal}
            >
              Close
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              Add Contact
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;

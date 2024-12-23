import React from "react";
import { FaUserCircle, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ContactList = ({ contact, openModal, handleDelete }) => {
  const handleUpdate = () => {
    openModal();
  };
  return (
    <div className="flex mb-3 justify-between gap-2 h-[64px] w-[360px] border bg-white rounded-lg shadow-lg  border-transparent text-center">
      <div className="flex text-center  justify-center items-center">
        <FaUserCircle className="text-blue-500 text-4xl text-center ml-3" />
      </div>

      <div className="flex items-start justify-center p-2 flex-col  flex-grow">
        <h2 className="text-lg font-semibold text-blue-600  capitalize">
          {contact.name}
        </h2>
        <h3 className="text-sm text-gray-500">{contact.mobile}</h3>
      </div>
      <div className="flex mr-2 justify-center items-center">
        <FaEdit
          className="text-2xl text-blue-500  cursor-pointer"
          onClick={handleUpdate}
        />
        <MdDelete
          className="text-2xl text-red-500 ml-1 cursor-pointer "
          onClick={() => handleDelete(contact.id)}
        />
      </div>
    </div>
  );
};

export default ContactList;

import { FaRegAddressBook } from "react-icons/fa"; // Example icon
import React from "react";

const NoContact = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 text-center">
      <FaRegAddressBook className="text-6xl text-white mb-4" />
      <h2 className="text-xl font-semibold text-white mb-4">
        No Contacts Found
      </h2>
      <p className="text-white">
        It looks like you haven't added any contacts yet. Add a new contact to
        get started!
      </p>
    </div>
  );
};

export default NoContact;

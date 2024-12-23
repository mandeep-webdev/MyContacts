import React from "react";
import ContactList from "./ContactList";
const ContactLists = ({ contacts, openModal, handleDelete }) => {
  return (
    <div className=" w-[360px] mx-auto">
      {contacts.map((contact) => (
        <ContactList
          key={contact.id}
          contact={contact}
          openModal={openModal}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default ContactLists;

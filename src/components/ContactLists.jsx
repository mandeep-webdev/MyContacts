import React from "react";
import ContactList from "./ContactList";
const ContactLists = ({ contacts }) => {
  return (
    <div className=" w-[360px] mx-auto">
      {contacts.map((contact) => (
        <ContactList key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default ContactLists;

import React from "react";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import ContactLists from "./components/ContactLists";
import Modal from "./components/Modal";
import {
  collection,
  getDocs,
  deleteDoc,
  addDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./config/firebase";
import NoContact from "./components/NoContact";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [modeValue, setModeValue] = useState("add");

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = (contact = null) => {
    if (contact) {
      setModeValue("update");
      setSelectedContact(contact);
    } else {
      setModeValue("add");
      setSelectedContact(null);
    }
    setIsModalOpen(true);
  };

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const collectionRef = collection(db, "contacts");
        // querySnapshot -- This is an array of objects
        const querySnapshot = await getDocs(collectionRef);
        const data = querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        // console.log(data);

        setContacts(data);
        setFilteredContacts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchContact();
  }, []);

  const handleChange = (e) => {
    const searchContact = e.target.value.toLowerCase();
    setFilteredContacts(
      contacts.filter(
        (contact) =>
          contact.name.toLowerCase().includes(searchContact) ||
          contact.mobile.includes(searchContact)
      )
    );
  };

  const handleAddContact = async (newContact) => {
    try {
      const docRef = await addDoc(collection(db, "contacts"), newContact);
      const addedContact = { id: docRef.id, ...newContact };
      setContacts((prevContacts) => {
        const updatedContacts = [...prevContacts, addedContact];
        setFilteredContacts(updatedContacts);
        return updatedContacts;
      });
      setIsModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  /* Delete Contact */
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      setContacts((contacts) => {
        const filteredData = contacts.filter((contact) => contact.id !== id);
        setFilteredContacts(filteredData);
        return filteredData;
      });
    } catch (error) {
      console.log(error);
    }
  };

  /* Update Contact */

  const handleUpdateContact = async (updatedContact) => {
    try {
      const contactRef = doc(db, "contacts", updatedContact?.id);
      await updateDoc(contactRef, {
        name: updatedContact?.name,
        mobile: updatedContact?.mobile,
      });
      setContacts((prevContacts) => {
        const filteredData = prevContacts.map((contact) =>
          contact.id === updatedContact?.id ? updatedContact : contact
        );
        setFilteredContacts(filteredData);
        return filteredData;
      });

      setIsModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="max-w-[370px] mx-auto">
      <Header
        openModal={openModal}
        setModeValue={setModeValue}
        handleChange={handleChange}
      />
      {contacts.length == 0 ? (
        <NoContact />
      ) : (
        <ContactLists
          contacts={filteredContacts}
          openModal={openModal}
          setModeValue={setModeValue}
          handleDelete={handleDelete}
        />
      )}
      <Modal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        mode={modeValue}
        selectedContact={selectedContact}
        handleUpdateContact={handleUpdateContact}
        handleAddContact={handleAddContact}
      />
    </div>
  );
};

export default App;

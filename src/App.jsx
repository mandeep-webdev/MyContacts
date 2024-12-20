import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Header from "./components/Header";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactLists from "./components/ContactLists";
import Modal from "./components/Modal";
const App = () => {
  const [contacts, setContacts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
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
        console.log(data);

        setContacts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchContact();
  }, []);
  return (
    <div className="max-w-[370px] mx-auto">
      <Header openModal={openModal} />
      <ContactLists contacts={contacts} />
      {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  );
};

export default App;

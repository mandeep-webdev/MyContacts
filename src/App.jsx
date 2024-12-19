import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Header from "./components/Header";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
const App = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const fetchContact = async () => {
      try {
        const collectionRef = collection(db, "contacts");
        // querySnapshot -- This is an array of objects
        const querySnapshot = await getDocs(collectionRef);
        const data = querySnapshot.docs.map((doc) => {
          return {
            id: Math.random(),
            ...doc.data(),
          };
        });

        setContacts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchContact();
  }, []);
  return (
    <div className="max-w-[370px] mx-auto">
      <Header />
    </div>
  );
};

export default App;

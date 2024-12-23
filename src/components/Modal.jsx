import { Field, Form, Formik } from "formik";
import React from "react";
import { createPortal } from "react-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const Modal = ({ mode, isModalOpen, closeModal }) => {
  const addContact = async (values) => {
    try {
      const collectionRef = collection(db, "contacts");
      const docRef = await addDoc(collectionRef, values);
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  if (!isModalOpen) {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm">
      <div className=" bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-semibold mb-2 text-slate-600 text-center">
          Add New Contact
        </h2>
        <Formik
          initialValues={{ name: "", mobile: "" }}
          onSubmit={(values) => addContact(values)}
        >
          <Form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-600 mb-1"
              >
                Name
              </label>
              <Field
                type="text"
                name="name"
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
              <Field
                type="tel"
                name="mobile"
                placeholder="Enter mobile number"
                className="border w-full border-slate-800 p-2 rounded-md outline-none text-slate-600"
              />
            </div>
            <div className="flex justify-end gap-2 py-2">
              <button
                type="button"
                className="border border-transparent px-2 rounded-md cursor-pointer hover:text-red-700 transition duration-300"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                type="submit"
                className=" border bg-blue-500 hover:bg-blue-600 transition duration-300 text-white p-2 rounded-md cursor-pointer"
              >
                {mode === "add" ? "Add Contact" : "Update Contact"}
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;

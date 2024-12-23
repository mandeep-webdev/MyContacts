import { Field, Form, Formik } from "formik";
import React from "react";
import { createPortal } from "react-dom";
import * as Yup from "yup";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const countryCodes = [
  { code: "+1", country: "United States" },
  { code: "+44", country: "United Kingdom" },
  { code: "+91", country: "India" },
];
const Modal = ({
  selectedContact,
  handleUpdateContact,
  mode,
  isModalOpen,
  closeModal,
}) => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    mobile: Yup.string()
      .test(
        "is-valid-mobile",
        "Mobile number must be exactly 10 digits",
        (value) => {
          const mobile = value.replace(/\s+/g, ""); // Remove all spaces
          return /^\d{10}$/.test(mobile); // Validate 10 digits
        }
      )
      .required("Mobile number is required"),
    countryCode: Yup.string().required("Country code is required"),
  });
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
  // console.log(selectedContact);

  return createPortal(
    <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm">
      <div className=" bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-semibold mb-2 text-slate-600 text-center">
          {mode === "add" ? "Add New " : "Update"} Contact
        </h2>
        <Formik
          initialValues={{
            name: selectedContact?.name || "",
            mobile: selectedContact?.mobile?.trim().slice(3) || "", // Assuming selectedContact.mobile includes country code
            countryCode: selectedContact?.mobile?.slice(0, 3) || "+1", // Initialize with country code (first 3 chars)
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            const submitValues = {
              ...values,
              mobile: `${values.countryCode} ${values.mobile}`, // Concatenate country code with mobile number
            };
            if (mode === "update") {
              const updatedContact = { ...selectedContact, ...submitValues };
              console.log(updatedContact);
              handleUpdateContact(updatedContact);
            } else {
              addContact(submitValues);
            }
          }}
        >
          {({ errors, touched }) => (
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
                {errors.name && touched.name && (
                  <div className="text-red-500 text-sm">{errors.name}</div>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="countryCode"
                  className="block text-sm font-medium text-slate-600 mb-1"
                >
                  Country Code
                </label>
                <Field
                  as="select"
                  name="countryCode"
                  className="border w-full border-slate-800 p-2 rounded-md outline-none text-slate-600"
                >
                  {countryCodes.map(({ code, country }) => (
                    <option key={code} value={code}>
                      {country} ({code})
                    </option>
                  ))}
                </Field>
                {errors.countryCode && touched.countryCode && (
                  <div className="text-red-500 text-sm">
                    {errors.countryCode}
                  </div>
                )}
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
                {errors.mobile && touched.mobile && (
                  <div className="text-red-500 text-sm">{errors.mobile}</div>
                )}
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
          )}
        </Formik>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;

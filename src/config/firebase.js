// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCrhnysCVn2jIkOL9WJmGZcFc6xxHtLO2M",
  authDomain: "mycontacts-8205d.firebaseapp.com",
  projectId: "mycontacts-8205d",
  storageBucket: "mycontacts-8205d.firebasestorage.app",
  messagingSenderId: "793350271143",
  appId: "1:793350271143:web:4f512c31c8376131e42b82",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

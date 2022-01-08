// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDe43NCfJSUGnRDnD8SLXsgrbtjn-TFaMs",
  authDomain: "employeedb-234ba.firebaseapp.com",
  projectId: "employeedb-234ba",
  storageBucket: "employeedb-234ba.appspot.com",
  messagingSenderId: "4230931204",
  appId: "1:4230931204:web:204756cb0df2b2e11ce651",
  measurementId: "G-N3JW7VDZ2W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

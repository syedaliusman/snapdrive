// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZeJaKZZsyA4tfq6iXY1OWU-3YlafgGls",
  authDomain: "drive-11b77.firebaseapp.com",
  projectId: "drive-11b77",
  storageBucket: "drive-11b77.appspot.com",
  messagingSenderId: "143740449997",
  appId: "1:143740449997:web:55c7aa8296dafbac69a584",
  measurementId: "G-351M2G3VD7",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

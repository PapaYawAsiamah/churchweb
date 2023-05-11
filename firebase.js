// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3oso4lOHOg88JJGMtfun9FXJtU8DzABo",
  authDomain: "topc-b41e5.firebaseapp.com",
  projectId: "topc-b41e5",
  storageBucket: "topc-b41e5.appspot.com",
  messagingSenderId: "295643134589",
  appId: "1:295643134589:web:4fc394ddc59a9182390f14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4ZMOWrMsRcdQ7MJmnMVyjEZEMW4hHIT8",
  authDomain: "react-disney-app-eb92a.firebaseapp.com",
  projectId: "react-disney-app-eb92a",
  storageBucket: "react-disney-app-eb92a.appspot.com",
  messagingSenderId: "406429863194",
  appId: "1:406429863194:web:a0b52a90bba1d2efef30a3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

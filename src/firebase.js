
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAI2EjqGHfcD6K3GcJzJ4AUnykSpoYiMVU",
  authDomain: "timekeeper-store.firebaseapp.com",
  projectId: "timekeeper-store",
  storageBucket: "timekeeper-store.appspot.com",
  messagingSenderId: "218703957570",
  appId: "1:218703957570:web:6e553bd2cd2ea7547e67db",
  measurementId: "G-MZQVNJ1NEH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
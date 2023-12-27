// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-17833.firebaseapp.com",
  projectId: "mern-auth-17833",
  storageBucket: "mern-auth-17833.appspot.com",
  messagingSenderId: "33489247932",
  appId: "1:33489247932:web:9edbfc1d40427a0718fab9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

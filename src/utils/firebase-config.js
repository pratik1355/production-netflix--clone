import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfTEetBUwGIkxIuI6pwBitl2JSb4Ufgkw",
  authDomain: "flexxit-project.firebaseapp.com",
  projectId: "flexxit-project",
  storageBucket: "flexxit-project.appspot.com",
  messagingSenderId: "109520953662",
  appId: "1:109520953662:web:028e5616ae410469f54c6f",
  measurementId: "G-HVP7F9GCC9",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);

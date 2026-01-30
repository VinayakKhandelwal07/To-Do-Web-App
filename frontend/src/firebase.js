// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // ✅ Import auth

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDda5VhUIWD7zbCN_itirdXtirGtSzQos",
  authDomain: "todo-board-2e74e.firebaseapp.com",
  projectId: "todo-board-2e74e",
  storageBucket: "todo-board-2e74e.firebasestorage.app",
  messagingSenderId: "68411741771",
  appId: "1:68411741771:web:e7df21584e7a319e235fce",
  measurementId: "G-P6DDP2MH4V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);

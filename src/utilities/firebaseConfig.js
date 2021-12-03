// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_ye4QwdH7Jqk7FDdEAY7b87VSNMsCi70",
    authDomain: "ecommerce-infuse.firebaseapp.com",
    projectId: "ecommerce-infuse",
    storageBucket: "ecommerce-infuse.appspot.com",
    messagingSenderId: "738267643476",
    appId: "1:738267643476:web:4cb3a05b66f245eb5cb7c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//data base
const db = getFirestore();
export default db;
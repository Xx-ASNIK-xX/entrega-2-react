
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfR9Rpp8aI0uUmDZ6Qmv4y5BQw2CaMmvo",
  authDomain: "ecommercereact2024.firebaseapp.com",
  projectId: "ecommercereact2024",
  storageBucket: "ecommercereact2024.appspot.com",
  messagingSenderId: "292838789796",
  appId: "1:292838789796:web:a73b53f4c5374edbe40c31"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db

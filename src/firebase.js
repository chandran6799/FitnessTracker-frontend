// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "fitness-tracker-bc6bd.firebaseapp.com",
  projectId: "fitness-tracker-bc6bd",
  storageBucket: "fitness-tracker-bc6bd.appspot.com",
  messagingSenderId: "1079110849604",
  appId: "1:1079110849604:web:882bc501e241aac10e1811"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
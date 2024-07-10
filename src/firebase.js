// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "fitness-tracker-865ef.firebaseapp.com",
  projectId: "fitness-tracker-865ef",
  storageBucket: "fitness-tracker-865ef.appspot.com",
  messagingSenderId: "509022947189",
  appId: "1:509022947189:web:3b9ee862c99f156c5cb53c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

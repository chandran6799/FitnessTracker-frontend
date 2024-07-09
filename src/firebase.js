// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "fitness-lab-db951.firebaseapp.com",
  projectId: "fitness-lab-db951",
  storageBucket: "fitness-lab-db951.appspot.com",
  messagingSenderId: "952983754578",
  appId: "1:952983754578:web:2040e9294280dd2a4a4c8b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

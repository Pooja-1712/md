// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-9f4ef.firebaseapp.com",
  projectId: "mern-estate-9f4ef",
  storageBucket: "mern-estate-9f4ef.appspot.com",
  messagingSenderId: "70519248270",
  appId: "1:70519248270:web:4e18dc942508d046e600df"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
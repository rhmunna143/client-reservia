// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APPID
// };



const firebaseConfig = {
    apiKey: "AIzaSyDq_T_TcgDKemNbbk7_QZDZZn3LSftTdA4",
    authDomain: "reservia-2c6f7.firebaseapp.com",
    projectId: "reservia-2c6f7",
    storageBucket: "reservia-2c6f7.appspot.com",
    messagingSenderId: "397324687414",
    appId: "1:397324687414:web:1a012041c2a6e6980da097"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
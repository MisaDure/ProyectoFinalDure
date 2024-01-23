// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHiCUFEubm8Ql2Ao8RxEuZJw_1AOO_-eQ",
  authDomain: "scisoaderesos.firebaseapp.com",
  projectId: "scisoaderesos",
  storageBucket: "scisoaderesos.appspot.com",
  messagingSenderId: "970995017412",
  appId: "1:970995017412:web:83dce42ef29e3fcdd14b91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
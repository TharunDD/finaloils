// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFZhZCYPS2FC5CuYkGQW2qK812IlCcw2w",
  authDomain: "oils-b86ea.firebaseapp.com",
  projectId: "oils-b86ea",
  storageBucket: "oils-b86ea.appspot.com",
  messagingSenderId: "559377330705",
  appId: "1:559377330705:web:b0054849097ea5730f37b0",
  measurementId: "G-WT1L984KYQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);
const analytics = getAnalytics(app);
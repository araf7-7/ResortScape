// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVeXlUG6TVDY9OlfPLKnoRKaosmPqY3C4",
  authDomain: "assignment-9-6d711.firebaseapp.com",
  projectId: "assignment-9-6d711",
  storageBucket: "assignment-9-6d711.appspot.com",
  messagingSenderId: "1014413085817",
  appId: "1:1014413085817:web:66576c28eccdc5a54358a8",
  measurementId: "G-1YWJ9C3G5G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth 
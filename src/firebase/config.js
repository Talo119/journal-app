// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHzSbhZvd9iZ8sNoa38Xok1JznaEBmhHk",
  authDomain: "react-curso-3c0c8.firebaseapp.com",
  projectId: "react-curso-3c0c8",
  storageBucket: "react-curso-3c0c8.appspot.com",
  messagingSenderId: "594246995545",
  appId: "1:594246995545:web:783e30072dd4bd94c56b48"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );
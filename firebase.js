// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPS0GSwCjnaxwr_XvJWbGMuv4xrKHMq38",
  authDomain: "flashcard-striped.firebaseapp.com",
  projectId: "flashcard-striped",
  storageBucket: "flashcard-striped.appspot.com",
  messagingSenderId: "295890777461",
  appId: "1:295890777461:web:4055d4b04dc3c7e85a8f3c",
  measurementId: "G-Z41LS87N5X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
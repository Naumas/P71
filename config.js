import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJGxapxRTEVjCFYKSyoPggE8DB18X_GvQ",
  authDomain: "project-71-c3c0e.firebaseapp.com",
  projectId: "project-71-c3c0e",
  storageBucket: "project-71-c3c0e.appspot.com",
  messagingSenderId: "345310215466",
  appId: "1:345310215466:web:30dafedef68d8c73a2b253"
};



firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

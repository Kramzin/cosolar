import firebase from "firebase/compat/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from '../seed';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCuD5M7rdq1CoVEzCLxcaaBdBNSi7S7KoU",
  authDomain: "cosolar-fdc2f.firebaseapp.com",
  projectId: "cosolar-fdc2f",
  storageBucket: "cosolar-fdc2f.appspot.com",
  messagingSenderId: "1037460539428",
  appId: "1:1037460539428:web:2adf7df008bfdaecfe30b1",
};
firebase.initializeApp(firebaseConfig);

export { firebase };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAUiGsEGHVwxqNsjvUbTW6UIdXmsTtPVEs",
  authDomain: "fir-demo-1ba66.firebaseapp.com",
  projectId: "fir-demo-1ba66",
  storageBucket: "fir-demo-1ba66.appspot.com",
  messagingSenderId: "66172239292",
  appId: "1:66172239292:web:81578d276dba2152237fb9",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
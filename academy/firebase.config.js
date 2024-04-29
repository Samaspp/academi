import { getApps, initializeApp, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyA2JkJMzDpOoEG7rKpIVXikfooU-TSHkWw",
    authDomain: "academy-e0563.firebaseapp.com",
    projectId: "academy-e0563",
    storageBucket: "academy-e0563.appspot.com",
    messagingSenderId: "476214950908",
    appId: "1:476214950908:web:58ad497fdbe31f2866d079",
    measurementId: "G-562R3B9R4R"
  };

let app =  initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)
export default app;
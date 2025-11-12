// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore}  from "firebase/firestore";
import {getStorage}  from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.FIREBASE_API_KEY,
  authDomain: "fastcash-92a74.firebaseapp.com",
  projectId: "fastcash-92a74",
  storageBucket: "fastcash-92a74.firebasestorage.app",
  messagingSenderId: "68862595667",
  appId: "1:68862595667:web:4a60f1a62b6633797eaca6"
};

// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage =  getStorage(app);

export{db, storage};
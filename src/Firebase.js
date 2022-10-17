import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDcm7A2Wgs7VQVsm8GhlDIqtKlbYr9kLpc",
  authDomain: "chat-65c68.firebaseapp.com",
  projectId: "chat-65c68",
  storageBucket: "chat-65c68.appspot.com",
  messagingSenderId: "223864120201",
  appId: "1:223864120201:web:c9e1bf7ca4bc66e4053758"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()
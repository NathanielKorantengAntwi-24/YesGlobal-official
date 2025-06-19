// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // ✅ Add this line

const firebaseConfig = {
  apiKey: "AIzaSyBsD1HG28z3Yh-bTu0PTDJQCcGn3nN_BXs",
  authDomain: "yesglobalnewpageapp.firebaseapp.com",
  projectId: "yesglobalnewpageapp",
  storageBucket: "yesglobalnewpageapp.firebasestorage.app",
  messagingSenderId: "300682171374",
  appId: "1:300682171374:web:b0b57bcdc8b9ef7ae0f4ff",
  measurementId: "G-XEBSG9KXEP"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // ✅ Add this line

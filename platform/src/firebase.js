import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// ✅ Removed unused `analytics`
const firebaseConfig = {
  apiKey: "AIzaSyANbTbYUPfZuRr2iUAxcbEWojCBKwuyn5w",
  authDomain: "education-2bd1e.firebaseapp.com",
  projectId: "education-2bd1e",
  storageBucket: "education-2bd1e.firebasestorage.app",
  messagingSenderId: "499133085861",
  appId: "1:499133085861:web:0229cd51234de8e0b1b54c",
  measurementId: "G-Z60P9VG1SY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }; // ✅ Only export what's needed

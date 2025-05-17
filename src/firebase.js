// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCb0n9GKcP7LtPXNHmSNIG1cYaiR9x0uR0",
  authDomain: "cookbookadmin-5cadc.firebaseapp.com",
  projectId: "cookbookadmin-5cadc",
  storageBucket: "cookbookadmin-5cadc.firebasestorage.app",
  messagingSenderId: "382342210925",
  appId: "1:382342210925:web:c58c6582eefb5c33426664",
  measurementId: "G-BRPH3LFLZ0"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

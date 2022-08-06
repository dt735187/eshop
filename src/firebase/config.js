// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";  
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyAe2m3-drBX_FitSp2EeAw4y66NeKw89Ww",
  authDomain: "eshop-73792.firebaseapp.com",
  projectId: "eshop-73792",
  storageBucket: "eshop-73792.appspot.com",
  messagingSenderId: "1020979752874",
  appId: "1:1020979752874:web:1dc1e9ebd2bea26bfbc5d3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
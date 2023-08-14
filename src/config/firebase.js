import { initializeApp } from "firebase/app";
import {getAuth, signOut} from "firebase/auth"
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAb2E-f_99pk263WVT7mE71y5pwudkokNc",
  authDomain: "opensea-extension.firebaseapp.com",
  projectId: "opensea-extension",
  storageBucket: "opensea-extension.appspot.com",
  messagingSenderId: "531472567785",
  appId: "1:531472567785:web:424a8eee7113594e010f78",
  measurementId: "G-PYCSL0GW6K"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
export const firestoreDB = getFirestore(app)
export const auth = getAuth(app) 
export const logout = ()=>{
  signOut(auth)
}
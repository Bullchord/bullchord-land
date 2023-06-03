// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5RJ9D8wyUj6J_iTG_t9cfF8stfxkH0vg",
  authDomain: "correct-bullchord.firebaseapp.com",
  projectId: "correct-bullchord",
  storageBucket: "correct-bullchord.appspot.com",
  messagingSenderId: "965085215898",
  appId: "1:965085215898:web:72cdd43274398a15acb323"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
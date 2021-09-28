// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW9cD0Tgpm3UTTx4f5rBZ5Z7XD0tu2sP4",
  authDomain: "drug-manager-82b2f.firebaseapp.com",
  projectId: "drug-manager-82b2f",
  storageBucket: "drug-manager-82b2f.appspot.com",
  messagingSenderId: "630683641471",
  appId: "1:630683641471:web:d6979b37b7e3c96e99c14a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

const db = getFirestore(app);
export {db};

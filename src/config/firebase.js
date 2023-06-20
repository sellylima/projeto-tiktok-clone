import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDdem_VbF001JvbsEWjtV3--m3IUyBYk-4",
  authDomain: "tiktok----jornada-dev.firebaseapp.com",
  projectId: "tiktok----jornada-dev",
  storageBucket: "tiktok----jornada-dev.appspot.com",
  messagingSenderId: "1077531490944",
  appId: "1:1077531490944:web:0b46a0a87ef3c6379b8465",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

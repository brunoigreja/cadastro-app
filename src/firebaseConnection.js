import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDbT133AMO5b1jYpni1CCmDaM3d4KUNtVE",
  authDomain: "cadastro-teste-25385.firebaseapp.com",
  projectId: "cadastro-teste-25385",
  storageBucket: "cadastro-teste-25385.firebasestorage.app",
  messagingSenderId: "748615665202",
  appId: "1:748615665202:web:0d8e8b6482256cc4dc1e2b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
  
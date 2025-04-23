// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8y95XhAOfaf0ZLuO2rWgGxsJzX1ErfR8",
  authDomain: "manga-reader-296c6.firebaseapp.com",
  projectId: "manga-reader-296c6",
  storageBucket: "manga-reader-296c6.firebasestorage.app",
  messagingSenderId: "56235599314",
  appId: "1:56235599314:web:fb37c3fa075a1155a8540b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}

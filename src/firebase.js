// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFunctions } from "firebase/functions";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAywvJ7Londm1l32-SgmNjGVL-V45wirHU",
    authDomain: "hybixgroup.firebaseapp.com",
    projectId: "hybixgroup",
    storageBucket: "hybixgroup.firebasestorage.app",
    messagingSenderId: "446543182088",
    appId: "1:446543182088:web:d86ad4d159a21bcb0194bd",
    measurementId: "G-TPCN4GNCXZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const functions = getFunctions(app);
export const db = getFirestore(app);
export default app;
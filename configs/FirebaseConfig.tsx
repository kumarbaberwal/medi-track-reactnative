// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA4qW3gLXzxO00VuinV_RerXXIu2oqacV8",
    authDomain: "meditracker-229e4.firebaseapp.com",
    projectId: "meditracker-229e4",
    storageBucket: "meditracker-229e4.firebasestorage.app",
    messagingSenderId: "986935333523",
    appId: "1:986935333523:web:69a58d03ab357b3f313366",
    measurementId: "G-4JQ9QYB7K6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
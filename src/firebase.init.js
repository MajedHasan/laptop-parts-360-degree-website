// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDXHV0h9u3HJP61Ce3C4L7oRUoKceLStTg",
    authDomain: "p-hero-assignment-12.firebaseapp.com",
    projectId: "p-hero-assignment-12",
    storageBucket: "p-hero-assignment-12.appspot.com",
    messagingSenderId: "57404945358",
    appId: "1:57404945358:web:f3b71423ee004d3373719f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth
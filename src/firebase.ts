// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwCS2R38Padm5X3ZD7gxGG5BhJXvJtErg",
  authDomain: "kubank-ba95c.firebaseapp.com",
  projectId: "kubank-ba95c",
  storageBucket: "kubank-ba95c.appspot.com",
  messagingSenderId: "743063342353",
  appId: "1:743063342353:web:10447def67939ca93d10b0",
  measurementId: "G-BNNX0TT0ZS",
};

export function initFirebase() {
  console.log("init");
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  getAnalytics(app);
}

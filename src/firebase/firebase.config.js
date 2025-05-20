
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCoSnia5uKBxqcEdILfppYEAlHpKLLBoA",
  authDomain: "my-friends-app-b6a62.firebaseapp.com",
  projectId: "my-friends-app-b6a62",
  storageBucket: "my-friends-app-b6a62.appspot.com",
  messagingSenderId: "649553592531",
  appId: "1:649553592531:web:a1d5b1ee50f5ef90dad426",
  measurementId: "G-YXH700WEKJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth, analytics };

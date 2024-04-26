// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrGCzJ9CEt8BFo4yoiE8V9Igzz0kDo0VI",
  authDomain: "tropitour-b6096.firebaseapp.com",
  projectId: "tropitour-b6096",
  storageBucket: "tropitour-b6096.appspot.com",
  messagingSenderId: "559906640048",
  appId: "1:559906640048:web:fae12592ccf6490181ab75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
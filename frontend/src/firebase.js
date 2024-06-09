// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwBQSOnElP7ATxJ_sPcuvlA7f_PT2VQv0",
  authDomain: "quora-174b8.firebaseapp.com",
  projectId: "quora-174b8",
  storageBucket: "quora-174b8.appspot.com",
  messagingSenderId: "431859964128",
  appId: "1:431859964128:web:d491ecdd38000200141885",
  measurementId: "G-669S6HH83X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

// const analytics = getAnalytics(app);
export { auth, provider };
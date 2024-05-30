// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { initializeApp, getApps, getApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfcnlBwyXgackWhkLMT6IueszBYfLHfYY",
  authDomain: "mma301-d4410.firebaseapp.com",
  databaseURL: "https://mma301-d4410-default-rtdb.firebaseio.com",
  projectId: "mma301-d4410",
  storageBucket: "mma301-d4410.appspot.com",
  messagingSenderId: "1062362461021",
  appId: "1:1062362461021:web:77a63cb85d4503d377eeb4",
  measurementId: "G-ZV1HQ0K8RL",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// let app;
// if (firebase.apps.length) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app();
// }

// const auth = firebase.auth();

// export { auth };

// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const auth = getAuth(app);

// export { auth };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

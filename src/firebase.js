import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyCoXuS_kQUXDPzV622yH4wfjN2vjpwd7Kw",
  authDomain: "email-app-1bc1d.firebaseapp.com",
  projectId: "email-app-1bc1d",
  storageBucket: "email-app-1bc1d.appspot.com",
  messagingSenderId: "503397494977",
  appId: "1:503397494977:web:987d17cd3f7808c8ae6440"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
// const provider = firebase.auth.GoogleAuthProvider();

export {db, auth};
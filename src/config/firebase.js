import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firebase-firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDwGfkYzU-kC-YO_f3TfCDSplchSMTKlMA",
    authDomain: "crud-reactjs-46985.firebaseapp.com",
    databaseURL: "https://crud-reactjs-46985.firebaseio.com",
    projectId: "crud-reactjs-46985",
    storageBucket: "crud-reactjs-46985.appspot.com",
    messagingSenderId: "875920214157",
    appId: "1:875920214157:web:4524bb7e48f169a34b7ac4"
  };
  
firebase.initializeApp(firebaseConfig);
export const firebaseFirestore = firebase.firestore();
export const firebaseAuth = firebase.auth;
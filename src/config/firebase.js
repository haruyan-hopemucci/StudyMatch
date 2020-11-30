import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_EZNpuL5KSntHcmvrAwDMwYoiR5HFU-I",
  authDomain: "study-match-d73ae.firebaseapp.com",
  databaseURL: "https://study-match-d73ae.firebaseio.com",
  projectId: "study-match-d73ae",
  storageBucket: "study-match-d73ae.appspot.com",
  messagingSenderId: "177672270984",
  appId: "1:177672270984:web:0cfed0bcc723009ec81b3d",
  measurementId: "G-1C15NMNG66",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
export const auth = firebase.auth();
export const db = firebase.firestore();

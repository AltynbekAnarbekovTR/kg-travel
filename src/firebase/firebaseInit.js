import firebase from "firebase/app"
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJtlb3W86tlDRh4taI5tvf_iACaFsGxKI",
  authDomain: "kyrgyzstan-travel.firebaseapp.com",
  projectId: "kyrgyzstan-travel",
  storageBucket: "kyrgyzstan-travel.appspot.com",
  messagingSenderId: "881517729542",
  appId: "1:881517729542:web:e8a6b7621081b12f31b087"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimesamp;

export { timestamp };
export default firebaseApp.firestore();
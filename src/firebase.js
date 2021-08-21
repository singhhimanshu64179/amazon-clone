import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcTqvzy1Q3cte-E2eUJnmOSjri7p1449Y",
  authDomain: "app-50f10.firebaseapp.com",
  projectId: "app-50f10",
  storageBucket: "app-50f10.appspot.com",
  messagingSenderId: "429887431377",
  appId: "1:429887431377:web:6c2ed4a0702a9345b9dbf0",
  measurementId: "G-7S36Z8E23J"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

  
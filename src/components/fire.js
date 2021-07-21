import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKIlRlbh1ZH4fsyIwkY02AY6BZERieBFc",
  authDomain: "tinder-app1.firebaseapp.com",
  projectId: "tinder-app1",
  storageBucket: "tinder-app1.appspot.com",
  messagingSenderId: "731483610743",
  appId: "1:731483610743:web:2b23142094a6c653f03072",
  measurementId: "G-HJF4DEEB80"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export  {database};

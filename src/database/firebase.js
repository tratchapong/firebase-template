import firebase from 'firebase/app'
import 'firebase/firestore'

  const firebaseConfig = {
    apiKey: "AIzaSyCszDW8d5rhA0aB4igCMLx4gajNWuaSQqs",
    authDomain: "testdb01-43c93.firebaseapp.com",
    projectId: "testdb01-43c93",
    storageBucket: "testdb01-43c93.appspot.com",
    messagingSenderId: "946324998846",
    appId: "1:946324998846:web:fc8942ed208cd1b84aecef",
    measurementId: "G-N8VVY3BPEQ"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore();
  



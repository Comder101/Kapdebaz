import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAKIsU-kgpUXZprikb4qZicIm-g2jmKYsU",
    authDomain: "react-with-firebase-75678.firebaseapp.com",
    projectId: "react-with-firebase-75678",
    storageBucket: "react-with-firebase-75678.appspot.com",
    messagingSenderId: "494172445575",
    appId: "1:494172445575:web:40e8b60f5861949ae25122",
    measurementId: "G-RFXVXZPYJ2"
  };

  firebase.initializeApp(firebaseConfig);
  export const dataref = firebase.database();
  export const storage = firebase.storage();
  export default firebase
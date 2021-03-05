import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyAVlneiBagkHsx59ugRuivKVJCdGQ0t7oo",
    authDomain: "simrs-799c5.firebaseapp.com",
    projectId: "simrs-799c5",
    storageBucket: "simrs-799c5.appspot.com",
    messagingSenderId: "313836929176",
    appId: "1:313836929176:web:3536e63415fb6b2be510ed"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const database = firebase.database();


export default firebase;
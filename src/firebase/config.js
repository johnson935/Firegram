import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBKBVZDCceNKaxZhq8J4RTjCOV-sOdIELQ",
    authDomain: "firegram-af12e.firebaseapp.com",
    databaseURL: "https://firegram-af12e.firebaseio.com",
    projectId: "firegram-af12e",
    storageBucket: "firegram-af12e.appspot.com",
    messagingSenderId: "457950226933",
    appId: "1:457950226933:web:3839d409a4896aa7bdd8bc",
    measurementId: "G-N164YWYXRP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  export {projectStorage, projectFirestore, timestamp};
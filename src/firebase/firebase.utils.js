import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDayfinqkzqgHkV8n7YNgRNaPPHVyCc8xo",
    authDomain: "ecom-project-cfd63.firebaseapp.com",
    projectId: "ecom-project-cfd63",
    storageBucket: "ecom-project-cfd63.appspot.com",
    messagingSenderId: "933228427459",
    appId: "1:933228427459:web:139fb300c0538444f70a76",
    measurementId: "G-MV2GYERR6V"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
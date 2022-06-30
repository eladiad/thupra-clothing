import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyDvNrDV-N8620hVyB9UumQFZ8x8B2sAYjw",
  authDomain: "thupra-clothing-db.firebaseapp.com",
  projectId: "thupra-clothing-db",
  storageBucket: "thupra-clothing-db.appspot.com",
  messagingSenderId: "422480348986",
  appId: "1:422480348986:web:83aca1f8381263ae8e7203",
  measurementId: "G-B3939VB1WE",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

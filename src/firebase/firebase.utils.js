import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDNY1laoLsfO68o1u-xx3-lV_PUOA51FoY",
    authDomain: "crwn-db-118ae.firebaseapp.com",
    databaseURL: "https://crwn-db-118ae.firebaseio.com",
    projectId: "crwn-db-118ae",
    storageBucket: "crwn-db-118ae.appspot.com",
    messagingSenderId: "392325160188",
    appId: "1:392325160188:web:cac0f619de1e7caf350b79",
    measurementId: "G-04N8LY7ETT"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
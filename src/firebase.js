import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBNjbmUcp-eCiaXhSnTvxx2RAglZeqJhkU",
  authDomain: "lense-store.firebaseapp.com",
  projectId: "lense-store",
  storageBucket: "lense-store.appspot.com",
  messagingSenderId: "468445056389",
  appId: "1:468445056389:web:beac8a653df7fec50948ec",
  measurementId: "G-PW1QM9WHFQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();

export  { auth, db };


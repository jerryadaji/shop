import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBR4-aKgStgeOjZ5Y6g_ktteZNipI1xygM",
  authDomain: "shop-dev-b9c97.firebaseapp.com",
  projectId: "shop-dev-b9c97",
  storageBucket: "shop-dev-b9c97.appspot.com",
  messagingSenderId: "253230171896",
  appId: "1:253230171896:web:597947b4949243b0cf1d0d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {firebaseApp, auth, provider}
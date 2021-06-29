import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { combineReducers } from "redux";
//import rootReducer from "./rootReducer";

import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore' // <- needed if using firestore
import { firebaseReducer } from 'react-redux-firebase'

import { createFirestoreInstance, firestoreReducer } from 'redux-firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBR4-aKgStgeOjZ5Y6g_ktteZNipI1xygM",
  authDomain: "shop-dev-b9c97.firebaseapp.com",
  projectId: "shop-dev-b9c97",
  storageBucket: "shop-dev-b9c97.appspot.com",
  messagingSenderId: "253230171896",
  appId: "1:253230171896:web:597947b4949243b0cf1d0d"
};

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

// Initialize firebase instance
firebase.initializeApp(firebaseConfig)

// Initialize other services on firebase instance
firebase.firestore() // <- needed if using firestore

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer // <- needed if using firestore
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}


export {store, rrfProps};

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyC9DhbBYpdYtSRiHPqLcTqej1LyDDHKtVs",
  authDomain: "lyrico-db.firebaseapp.com",
  databaseURL: "https://lyrico-db-default-rtdb.firebaseio.com",
  projectId: "lyrico-db",
  storageBucket: "lyrico-db.appspot.com",
  messagingSenderId: "745969762259",
  appId: "1:745969762259:web:3c8432af998b6d8231b926"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()
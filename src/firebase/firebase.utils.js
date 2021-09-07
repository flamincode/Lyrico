import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyC9DhbBYpdYtSRiHPqLcTqej1LyDDHKtVs",
  authDomain: "lyrico-db.firebaseapp.com",
  projectId: "lyrico-db",
  storageBucket: "lyrico-db.appspot.com",
  messagingSenderId: "745969762259",
  appId: "1:745969762259:web:a6483e679670c04e31b926"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()
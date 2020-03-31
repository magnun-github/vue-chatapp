import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if (!firebase.apps.length) {
 const config = {
   apiKey: "AIzaSyAaHQJXyKnYSlVaAZFmT2iE8wOuMniGuvo",
   authDomain: "chat-app-df1b9.firebaseapp.com",
   databaseURL: "https://chat-app-df1b9.firebaseio.com",
   projectId: "chat-app-df1b9",
   storageBucket: "chat-app-df1b9.appspot.com",
   messagingSenderId: "19543549333",
   appId: "1:19543549333:web:760d09a9162f796a61c29c",
   measurementId: "G-N5L2F08WML"
 }
 firebase.initializeApp(config)
}

const db = firebase.firestore()
export {
 firebase,
 db
}
import * as firebase from 'firebase'
// import analytics from 'firebase/analytics'
// import auth from 'firebase/auth'
// import firestore from 'firebase/firestore'

const settings = { timestampsInSnapshots: true }

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "beerfinder-51329.firebaseapp.com",
  databaseURL: "https://beerfinder-51329.firebaseio.com",
  projectId: "beerfinder-51329",
  storageBucket: "beerfinder-51329.appspot.com",
  messagingSenderId: "671115368231",
  appId: "1:671115368231:web:c30e5971f7da00db857b02",
  measurementId: "G-0BR0E45PXN"
};
firebase.initializeApp(config)

firebase.firestore().settings(settings)

export default firebase

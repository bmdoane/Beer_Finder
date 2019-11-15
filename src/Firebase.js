import * as firebase from 'firebase'
// import analytics from 'firebase/analytics'
// import auth from 'firebase/auth'
// import firestore from 'firebase/firestore'

const settings = { timestampsInSnapshots: true }

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "beerfinder-251915.firebaseapp.com",
  databaseURL: "https://beerfinder-251915.firebaseio.com",
  projectId: "beerfinder-251915",
  storageBucket: "beerfinder-251915.appspot.com",
  messagingSenderId: "84958152662",
  appId: "1:84958152662:web:cd66ee261766f9bcf84677",
  measurementId: "G-GF0T4RMV0K"
};
firebase.initializeApp(config)

firebase.firestore().settings(settings)

export default firebase

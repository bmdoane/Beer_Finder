import firebase from 'firebase/app'
import 'firebase/firestore'
import config from './config'

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()

export default db



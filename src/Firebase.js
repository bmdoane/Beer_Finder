import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import config from './config'

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
export const auth = firebaseApp.auth()
export const emailAuthProvider = new firebase.auth.EmailAuthProvider()

export default db



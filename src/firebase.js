import firebase from 'firebase'
import 'firebase/firestore'

export const fb = firebase.initializeApp({
  apiKey: 'AIzaSyAqwaUrW-NbCLY1_WiYvR-_fKHpZvjPJ04',
  authDomain: 'hacktiv8-195202.firebaseapp.com',
  databaseURL: 'https://hacktiv8-195202.firebaseio.com',
  projectId: 'hacktiv8-195202',
  storageBucket: 'hacktiv8-195202.appspot.com',
  messagingSenderId: '95002214418'
})

export const qdb = fb.firestore().collection('questions')
export const auth = fb.auth()

// export {
//   fb,
//   qdb,
//   getuser
// }

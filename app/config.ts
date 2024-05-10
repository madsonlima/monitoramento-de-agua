import firebase from 'firebase/compat/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: "SuaChaveDeAPI",
  authDomain: "testeiot-fb606.firebaseapp.com",
  databaseURL: "https://testeiot-fb606-default-rtdb.firebaseio.com",
  projectId: "testeiot-fb606",
  storageBucket: "testeiot-fb606.appspot.com",
  messagingSenderId: "1097006375740",
  appId: "1:1097006375740:web:8841d30cb0a99d822b7439"
}

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

const db = getDatabase()

export { db }
import firebase from 'firebase/app'
import 'firebase/firestore'

let firebaseConfig = {
    apiKey: "AIzaSyBFeI2rdTQHxrxg1PzOu7uyeUiys7dBHl4",
    authDomain: "todos-app-9d1b4.firebaseapp.com",
    databaseURL: "https://todos-app-9d1b4.firebaseio.com",
    projectId: "todos-app-9d1b4",
    storageBucket: "",
    messagingSenderId: "508252157209",
    appId: "1:508252157209:web:14698a38e9b09b7c"
  };
const app = firebase.initializeApp(firebaseConfig);

export default app.firestore()
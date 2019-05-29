import firebase from 'firebase'
import firestore from 'firebase/firebase-firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAveqGCqTo-IGxOs7S-5HNUyjFJD7mX5-Y",
  authDomain: "vue-ggchat.firebaseapp.com",
  databaseURL: "https://vue-ggchat.firebaseio.com",
  projectId: "vue-ggchat",
  storageBucket: "vue-ggchat.appspot.com",
  messagingSenderId: "96769330289",
  appId: "1:96769330289:web:67ee5261cdce824a"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
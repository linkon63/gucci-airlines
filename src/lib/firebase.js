import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBYraiy7IVk9CJiDd007xjc4-dGcJC3SWU",
    authDomain: "airlines-booking.firebaseapp.com",
    projectId: "airlines-booking",
    storageBucket: "airlines-booking.appspot.com",
    messagingSenderId: "852081788638",
    appId: "1:852081788638:web:8256ec3ebb34427f85a44f"
  };

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export default firebase;
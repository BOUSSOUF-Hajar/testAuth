import firebase from 'firebase';
const firebaseConfig = {
        apiKey: "AIzaSyAPV1AOmaG058CYgHnk6t5uETvohhNw_4g",
        authDomain: "profireb-1b436.firebaseapp.com",
        databaseURL: "https://profireb-1b436-default-rtdb.firebaseio.com",
        projectId: "profireb-1b436",
        storageBucket: "profireb-1b436.appspot.com",
        messagingSenderId: "176935405964",
        appId: "1:176935405964:web:2a53e8d6eb527339d2aea9",
        measurementId: "G-299ZGRJEDQ"
    };
try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack);
  }
}
const fire = firebase;
export default fire;
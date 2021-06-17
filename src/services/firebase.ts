import firebase from "firebase/app";

const firebaseConfig = {
  // please create a web app on Firebase Console to get the configuration (https://console.firebase.google.com)
  apiKey: "AIzaSyAy7njTMTITaJE4DdW7RL1DHLKxgpvp9tw",
  authDomain: "react-crud-f940e.firebaseapp.com",
  databaseURL: "https://react-crud-f940e-default-rtdb.firebaseio.com",
  projectId: "react-crud-f940e",
  storageBucket: "react-crud-f940e.appspot.com",
  messagingSenderId: "342707273595",
  appId: "1:342707273595:web:d530da15ab29c0be8687de"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCQOXwLrQsJYj_LuOeBrnrr4zpFbTxAU1o",
  authDomain: "shopping-app-40622.firebaseapp.com",
  projectId: "shopping-app-40622",
  storageBucket: "shopping-app-40622.appspot.com",
  messagingSenderId: "971952796252",
  appId: "1:971952796252:web:0923766cf92f83f5e22c99"
};
  firebase.initializeApp(firebaseConfig);
  let db=firebase.firestore();
  let timestamp=firebase.firestore.FieldValue.serverTimestamp;
  let auth = firebase.auth();

  export {db,timestamp,auth}
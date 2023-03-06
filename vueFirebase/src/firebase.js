import firebase from 'firebase/app';
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCVCc6YFt3k8t03oktV85cbUe20ClKs7vE",
  authDomain: "vuefirebase-fe72d.firebaseapp.com",
  projectId: "vuefirebase-fe72d",
  storageBucket: "vuefirebase-fe72d.appspot.com",
  messagingSenderId: "303364257062",
  appId: "1:303364257062:web:866d19862b43cbfe45bde7"
};
firebase.initializeApp(firebaseConfig);
export default firebase.database();





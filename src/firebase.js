import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyDwTWSTZ4rmObfZG5ol0kEWLtajeJ4RO9w",
  authDomain: "twitter-clone-ae18b.firebaseapp.com",
  projectId: "twitter-clone-ae18b",
  storageBucket: "twitter-clone-ae18b.appspot.com",
  messagingSenderId: "1035013458366",
  appId: "1:1035013458366:web:81ba0e17ff5e156c3b51ef",
};


firebase.initializeApp(config);

export const firestore = firebase.firestore();


export default firebase;
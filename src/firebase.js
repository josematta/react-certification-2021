import firebase from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: 'AIzaSyBK2_Rf41Do90qmBIK4lgUR8Yj8JDx-S9g',
  authDomain: 'auth-challenge-e5657.firebaseapp.com',
  projectId: 'auth-challenge-e5657',
  storageBucket: 'auth-challenge-e5657.appspot.com',
  messagingSenderId: '526031946131',
  appId: '1:526031946131:web:b926f5d344ebfc4811e866',
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export default app;

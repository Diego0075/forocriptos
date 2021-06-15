import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import {firebaseConfig} from './oculto.js'


export const db = firebase
  .initializeApp(firebaseConfig)
  .firestore()



export default{
  auth: firebase.auth(),
  loginGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      console.log(result);
    })
    .catch(function(error){
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
      console.log(errorCode, errorMessage, email, credential);
      })
  }
}
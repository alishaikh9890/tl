
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'


const firebaseConfig = {
    apiKey: "AIzaSyChApaFRdyoAJiHU41ml3QdLe7Fb7Nz5mw",
    authDomain: "auth-redux-1db06.firebaseapp.com",
    projectId: "auth-redux-1db06",
    storageBucket: "auth-redux-1db06.firebasestorage.app",
    messagingSenderId: "285137242876",
    appId: "1:285137242876:web:1245fba972095c1d79e579",
    measurementId: "G-W5TGJX1CZ4"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()



  export {auth, provider}
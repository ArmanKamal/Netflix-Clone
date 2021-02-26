import Firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'



const config = {
    apiKey: "AIzaSyAoteQdlb0iDLmGk2O-SaYfv4x6PCqxyJM",
    authDomain: "netflix-clo-c9c6e.firebaseapp.com",
    projectId: "netflix-clo-c9c6e",
    storageBucket: "netflix-clo-c9c6e.appspot.com",
    messagingSenderId: "1067438765793",
    appId: "1:1067438765793:web:33aaa2fdeef1c24de029a0"
}

const firebase = Firebase.initializeApp(config)


export {firebase}
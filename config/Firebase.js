import firebase from 'firebase'
// import {
//     API_KEY,
//     AUTH_DOMAIN,
//     DATABASE_URL,
//     PROJECT_ID,
//     MESSAGE_SENDER_ID,
//     APP_ID
// } from 'react-native-dotenv'


// const firebaseConfig = {
//     apiKey: API_KEY,
//     authDomain: AUTH_DOMAIN,
//     databaseURL: DATABASE_URL,
//     projectId: PROJECT_ID,
//     storageBucket: '',
//     messagingSenderId: MESSAGE_SENDER_ID,
//     appId: APP_ID,
//     measurementId: "G-VX90RN1JRC"
// }

const firebaseConfig = {
    apiKey: "AIzaSyAcXjQACiSWFFHbJuHIEeDtgc2Cmmri5oM",
    authDomain: "meditation-app-34538.firebaseapp.com",
    databaseURL: "https://meditation-app-34538.firebaseio.com",
    projectId: "meditation-app-34538",
    storageBucket: "meditation-app-34538.appspot.com",
    messagingSenderId: "869508202761",
    appId: "1:869508202761:web:44ed26c6f624ded27113d8",
    measurementId: "G-VX90RN1JRC"
}

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig)
    
export default Firebase
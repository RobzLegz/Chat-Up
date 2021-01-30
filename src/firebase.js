import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBKlBhiJEiqskJ7gIp7Ufg2LI9JlY5q_5U",
    authDomain: "chat-up-10e87.firebaseapp.com",
    projectId: "chat-up-10e87",
    storageBucket: "chat-up-10e87.appspot.com",
    messagingSenderId: "1018086048492",
    appId: "1:1018086048492:web:c4b429b5a347faa25a5bc9",
    measurementId: "G-84GPRQEJWR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
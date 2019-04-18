import firebase from "firebase"
import firestore from "firebase/firestore"

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCgVueWwtQpOCYkE1W5_1P4qjkN9-eSbUo",
    authDomain: "live-chat-835c2.firebaseapp.com",
    databaseURL: "https://live-chat-835c2.firebaseio.com",
    projectId: "live-chat-835c2",
    storageBucket: "live-chat-835c2.appspot.com",
    messagingSenderId: "1478454736"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore()

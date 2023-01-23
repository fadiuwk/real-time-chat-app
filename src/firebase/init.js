import firebase from "firebase/app";
require("firebase/firestore");
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCHy9bKa874i9Yihjo6_g8whShUFqSKBlg",
  authDomain: "chat-3ac69.firebaseapp.com",
  projectId: "chat-3ac69",
  storageBucket: "chat-3ac69.appspot.com",
  messagingSenderId: "847693758753",
  appId: "1:847693758753:web:72c6c99ab282172416be60",
  measurementId: "G-PSGWQFT55X"
};

/*
				======================
					put your firebase data
				=====================
*/

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();

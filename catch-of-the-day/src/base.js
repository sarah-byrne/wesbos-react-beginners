import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDz4zef1R-VeDkMy2khtqdkLMKhO2b4vk0",
    authDomain: "catch-of-the-day-sarah.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-sarah.firebaseio.com",
    projectId: "catch-of-the-day-sarah",
    storageBucket: "catch-of-the-day-sarah.appspot.com",
    messagingSenderId: "971589107888"
})

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
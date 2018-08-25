import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbIhYkPJC1gJdBuv_fo7eaSnXXCS_1DVA",
  authDomain: "meetup-214407.firebaseapp.com",
  databaseURL: "https://meetup-214407.firebaseio.com",
  projectId: "meetup-214407",
  storageBucket: "meetup-214407.appspot.com",
  messagingSenderId: "151906452632"
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
    timestampsInSnapshots: true
}
firestore.settings(settings)
export default firebase;



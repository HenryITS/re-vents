import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8Vk_i7sv_2lPJk3llp9stWHOVD2jqqGs",
  authDomain: "rvents-214107.firebaseapp.com",
  databaseURL: "https://rvents-214107.firebaseio.com",
  projectId: "rvents-214107",
  storageBucket: "rvents-214107.appspot.com",
  messagingSenderId: "986786734559"
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
    timestampsInSnapshots: true
}
firestore.settings(settings)
export default firebase;



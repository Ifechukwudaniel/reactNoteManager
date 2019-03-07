import * as firebase  from "firebase"


const config = {
    apiKey: "AIzaSyDTa-U_LYzkN5-0ftNgGwlKdy1IweUlGSg",
    authDomain: "notemanager-6952f.firebaseapp.com",
    databaseURL: "https://notemanager-6952f.firebaseio.com",
    projectId: "notemanager-6952f",
    storageBucket: "notemanager-6952f.appspot.com",
    messagingSenderId: "615775531292"
};
firebase.initializeApp(config)

let firebaseDB = firebase.database();
let GoogleAuth = new firebase.auth.GoogleAuthProvider()

 firebaseDB.ref("/").push({
      "just":"blas"
 })
export {
    firebase,
    firebaseDB,
    GoogleAuth
}
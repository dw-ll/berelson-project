import firebase from 'firebase/app';
import 'firebase/storage';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCnwD14hg_Jb1HEeoW7WBJgkuaalu3KmMI",
    authDomain: "berelson-daa8e.firebaseapp.com",
    databaseURL: "https://berelson-daa8e.firebaseio.com",
    projectId: "berelson-daa8e",
    storageBucket: "berelson-daa8e.appspot.com",
    messagingSenderId: "148496207374"
};
firebase.initializeApp(config);

const storage = firebase.storage();

export{
    storage,firebase as default;
}
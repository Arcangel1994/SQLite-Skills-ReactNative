import firebase from 'firebase';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBrUD1t0_anHzHR0kXrXBhiwM9uwhVZDWM",
    authDomain: "quotes-3118f.firebaseapp.com",
    databaseURL: "https://quotes-3118f.firebaseio.com",
    projectId: "quotes-3118f",
    storageBucket: "quotes-3118f.appspot.com",
    messagingSenderId: "970962896256",
    appId: "1:970962896256:web:09f78571e875c919"
  };

  export default class Firebase{

    static db;

    static init(){
        firebase.initializeApp(config);
        Firebase.db = firebase.firestore();
    }

  }

  
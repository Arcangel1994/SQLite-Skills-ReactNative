import firebase from 'firebase';
import 'firebase/firestore';

const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };

  export default class Firebase{

    static db;

    static init(){
        firebase.initializeApp(config);
        Firebase.db = firebase.firestore();
    }

  }

  

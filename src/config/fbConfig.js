import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyDJ7CoE4zp6NuBrMC-t0-mejOfUIGP1T1M",
    authDomain: "zaio-mario-plan.firebaseapp.com",
    databaseURL: "https://zaio-mario-plan.firebaseio.com",
    projectId: "zaio-mario-plan",
    storageBucket: "zaio-mario-plan.appspot.com",
    messagingSenderId: "701188575083",
    appId: "1:701188575083:web:0bdd6786a298118f3d462e",
    measurementId: "G-NRTQ72V9QQ"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 
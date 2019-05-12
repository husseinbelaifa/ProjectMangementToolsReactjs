import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
 apiKey: "AIzaSyAj1SJkmnE5ttbKzFNx84bbpWYFBzybBB0",
 authDomain: "projectmanagement-986bf.firebaseapp.com",
 databaseURL: "https://projectmanagement-986bf.firebaseio.com",
 projectId: "projectmanagement-986bf",
 storageBucket: "projectmanagement-986bf.appspot.com",
 messagingSenderId: "619792813197",
 appId: "1:619792813197:web:c00f7875f6e34421"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore().settings({
 timestampsInSnapshots: true
});

export default firebase;
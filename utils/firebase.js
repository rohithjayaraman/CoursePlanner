import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCKfxSqmgBz1_vwL0AfcrEyJwKiliBuilE",
    authDomain: "courseplanner-fc888.firebaseapp.com",
    databaseURL: "https://courseplanner-fc888-default-rtdb.firebaseio.com",
    projectId: "courseplanner-fc888",
    storageBucket: "courseplanner-fc888.appspot.com",
    messagingSenderId: "457596172823",
    appId: "1:457596172823:web:833637ca9962ad02323a52",
    measurementId: "G-Y6QJ8HKX12"
};

firebase.initializeApp(firebaseConfig);

export { firebase };

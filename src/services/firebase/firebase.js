import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth";

const {REACT_APP_API_URI_PERSONAL_FIREBASE} = process.env;

const firebaseConfig = {
    apiKey: REACT_APP_API_URI_PERSONAL_FIREBASE,
    authDomain: "norbifirestore.firebaseapp.com",
    projectId: "norbifirestore",
    storageBucket: "norbifirestore.appspot.com",
    messagingSenderId: "549508671232",
    appId: "1:549508671232:web:f120508af40adee098b5e5",
    measurementId: "G-5LK3DB9CE7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app);

export {db, app, auth}

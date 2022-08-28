import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCUyArxwXXzQUZnwUIM5RLxrJ02HXD5cQg",
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

export {db, app}

import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBRTwT6j1tAvEX3BLsUGOVoIH9MA8PWdbU",
    authDomain: "basic-api-8569f.firebaseapp.com",
    projectId: "basic-api-8569f",
    storageBucket: "basic-api-8569f.appspot.com",
    messagingSenderId: "911941616158",
    appId: "1:911941616158:web:91489d8d4c31e06e5d640f",
    measurementId: "G-C9XEN5L958"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
console.log(analytics)
export {db}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAg5zi9tD_t-68yLSjngiK9iTXXaB1n5Ec",
    authDomain: "to-do-dcd5a.firebaseapp.com",
    projectId: "to-do-dcd5a",
    storageBucket: "to-do-dcd5a.appspot.com",
    messagingSenderId: "278413437480",
    appId: "1:278413437480:web:788722e1d223603415231d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {app, auth};
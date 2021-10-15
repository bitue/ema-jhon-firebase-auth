import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAaNbpCJYb8OrIbknRG-bZp5FxWBQFeXSk",
    authDomain: "ema-jhon-firebase-auth-a2e33.firebaseapp.com",
    projectId: "ema-jhon-firebase-auth-a2e33",
    storageBucket: "ema-jhon-firebase-auth-a2e33.appspot.com",
    messagingSenderId: "393767751659",
    appId: "1:393767751659:web:7bdc022dea73761dec53ae",
    measurementId: "G-CDD0PZ1YB6"
  };

const firebaseInit = () =>{
    initializeApp(firebaseConfig)
}

export default firebaseInit


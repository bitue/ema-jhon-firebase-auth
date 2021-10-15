import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect, useState } from 'react';
import firebaseInit from "./firebase.config";

firebaseInit()



const UseFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const auth = getAuth()

    const signInGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)

            })


    }
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            
            } 
          });



    },[])

    const signOutGoogle =()=>{
        signOut(auth)
        .then(() => {
            setUser({})
          }).catch((error) => {
            setError(error.message)
          });

    }


    return {
        user, error , signInGoogle , signOutGoogle
    }


};

export default UseFirebase;
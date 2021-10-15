import React, { createContext } from 'react';
import UseFirebase from '../firebase/UseFirebase';



export const AuthContext = createContext()


const AuthProvider = ({ children }) => {
    const allContext = UseFirebase()
    console.log(allContext)
    return (
        <AuthContext.Provider value={allContext}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;


//declare a authContext var from create context 
// then return a element <AuthContext.provider/> 
//get props and inside get props.children 
//export the AuthContext 
//set authContext in the app.js for making wrap ur data
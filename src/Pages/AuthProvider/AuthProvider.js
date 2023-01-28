import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import { app } from '../../Firebase/firebase.config';

const auth = getAuth(app)
export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(false)

    if(loading){
        <progress className='progress w-full progress-accent'></progress>
    }

    const signupemail = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginemail = (email, password)=> {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateprofile = (profile) => {
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
    }

    const signInwithPop = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unSubscribe()
        }
    }, [])

    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    

    const authinfo = {
        user,
        signupemail,
        loginemail,
        logout,
        updateprofile,
        signInwithPop
    }

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
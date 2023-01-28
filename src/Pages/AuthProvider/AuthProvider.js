import React, { useState } from 'react';
import {getAuth} from 'firebase/auth'
import { app } from '../../Firebase/firebase.config';

export const AuthContext = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(false)


    const authinfo = {
        user
    }

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
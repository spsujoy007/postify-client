import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Protection = ({children}) => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    
    if(!user?.uid){
        return navigate('/login')
    }
    else {
        return (
            <div>
                {children}
            </div>
        )
    }
};

export default Protection;
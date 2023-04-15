import React, { useContext } from 'react';
import { AuthProvider } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../Shared/Spinner/Spinner';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthProvider);
    const location = useLocation();

    if(loading){
        return <Spinner></Spinner>
    }

    if(user && user?.email){
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
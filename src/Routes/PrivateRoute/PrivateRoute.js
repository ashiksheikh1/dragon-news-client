import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user,loading } = useContext(AuthContext)
    const location = useLocation();

    if(loading){
        return <Spinner animation="border" variant="primary" />
    }
    if (!user) {
        return <Navigate to='/login' start={{ from: location }} repllace></Navigate>
    }
    return children;
};

export default PrivateRoute;
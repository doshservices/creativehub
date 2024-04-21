import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

interface RootState {
    auth: {
        user: any;
    };
}

export const clearStorage = () => {
    localStorage.removeItem('c/id')
    localStorage.removeItem('c/tk')
    localStorage.removeItem('c/usn')
    window.location.reload()
}

const AuthRoutes: React.FC = () => {
    const authUser = useSelector((state: RootState) => state?.auth?.user);

    return authUser ? <Outlet /> : <Navigate to="/signin" replace />;
};

export default AuthRoutes;
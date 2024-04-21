import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

interface RootState {
    auth: {
        user: any;
    };
}

const OpenRoutes: React.FC = () => {
    const navigate = useNavigate();
    const authUser = useSelector((state: RootState) => state?.auth?.user);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    useEffect(() => {
        if (authUser) {
            navigate(from, { replace: true });
        }
    }, []);

    return authUser ? <Navigate to={from} replace /> : <Outlet />;
};

export default OpenRoutes;
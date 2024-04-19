import { useEffect } from 'react';
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthentication } from './helper';

const OpenRoutes = () => {
    const authenticated = useAuthentication();
    const navigate = useNavigate()

    useEffect(() => {
        if (authenticated) {
            navigate("/");
        }
    }, [authenticated, navigate]);
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default OpenRoutes;

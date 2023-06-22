import { useEffect } from 'react';
import { isAuthenticated } from "./helper";
import { Outlet, useNavigate } from "react-router-dom";

const OpenRoutes = () => {
    const authenticated = isAuthenticated();
    const navigate = useNavigate()

    useEffect(() => {
        if (authenticated) {
            navigate("/");
        }
    }, [authenticated]);
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default OpenRoutes;

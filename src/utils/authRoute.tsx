import { useEffect } from 'react';
import { isAuthenticated } from "./helper";
import { Outlet, useNavigate } from "react-router-dom";

export const clearStorage = () => {
    localStorage.removeItem('c/id')
    localStorage.removeItem('c/tk')
    localStorage.removeItem('c/usn')
}

const AuthRoutes = () => {

    const authenticated = isAuthenticated();
    const navigate = useNavigate();

    useEffect(() => {
        if (!authenticated) {
            navigate("/signin");
        }
    }, [authenticated]);

    // log user out after 3 hours
    // useEffect(() => {
    //     setTimeout(clearStorage, 1000 * 60 * 60 * 3)
    // }, [])

    return (
        <div>
            <Outlet />
        </div>
    )
}

export default AuthRoutes;
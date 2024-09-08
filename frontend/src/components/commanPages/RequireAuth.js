import { Outlet,useLocation,Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        auth?.role?.find(role => allowedRoles?.includes(role))?<Outlet/>:
        auth.accessToken?<Navigate to="/" state={{ from: location }} replace />:
        <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;

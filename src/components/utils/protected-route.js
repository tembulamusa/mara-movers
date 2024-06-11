import React from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import { getFromLocalStorage } from './local-storage';

const ProtectedRoute = ({}) => {
    const location = useLocation();
    const  user = getFromLocalStorage("user");
    return user?.token ? <Outlet /> : <Navigate  replace to="/login" state={{from:location}} />
}

export default ProtectedRoute;

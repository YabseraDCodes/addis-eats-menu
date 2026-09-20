import React from 'react'
import { Navigate, useLocation } from "react-router-dom";




function RequireAuth({user, children}) {
    const location = useLocation();
    if (!user) {
        return (
            <Navigate to="/Login" state={{ from: location }} replace />
        )
    }
    return (
        <div>
            {children}
        </div>
    )
}

export default RequireAuth
import React from 'react'
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
    let gmail = JSON.parse(localStorage.getItem("userEmail"))
    if (gmail !== "jeevanaloor500@gmail.com") {
        return <Navigate to="/" />


    }
    return children
}

export default PrivateRoute
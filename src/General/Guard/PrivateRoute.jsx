import { jwtDecode } from 'jwt-decode';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ requiredRoles }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" />;
  }

  try {
    const decodedToken = jwtDecode(token);
    const userRoles = decodedToken.roles || [];

    const hasRequiredRole = requiredRoles.some(role => userRoles.includes(role));

    if (!hasRequiredRole) {
      return <Navigate to="/" />;
    }

    return <Outlet />;
  } catch (error) {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = () => {
  const { token } = useAuth();
  return token ? <Outlet /> : <Navigate to="/meta533/login" />;
};

export default ProtectedRoute;

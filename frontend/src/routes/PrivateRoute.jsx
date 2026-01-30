import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();

  // Agar user login nahi hai → login page redirect
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  // Agar user login hai → requested page show karo
  return children;
};

export default PrivateRoute;

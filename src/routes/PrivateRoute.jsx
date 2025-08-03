// components/PrivateRoute.jsx
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("token"); // or however you're storing auth

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

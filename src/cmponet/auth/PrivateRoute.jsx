import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Lodding from "./Loddinge"; // spelling fixed later if needed

function PrivateRoute({ children }) {
   const { user, loading } = useContext(AuthContext);
   const location = useLocation();


   if (loading) {
      return <Lodding />;
   }

   if (user && user.email) {
      return children;
   }

   return <Navigate state={location.pathname} to="/auth/login" replace />;
}

export default PrivateRoute;

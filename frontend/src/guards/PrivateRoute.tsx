import { PropsWithChildren, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const PrivateRoute = ({ children }: PropsWithChildren<any>) => {
  const { user } = useContext(AuthContext);

  return user ? <>{children}</> : <Navigate to="/login" replace />;
};

export default PrivateRoute;

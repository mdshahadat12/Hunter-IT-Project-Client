/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate } from "react-router-dom";
import Loading from "../Components/Loading";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Loading></Loading>
  }
  if (user) {
    return <div>{children}</div>;
  } else {
    return <Navigate to={"/login"}></Navigate>;
  }
};

export default PrivetRoute;

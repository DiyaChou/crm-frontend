import React from "react";

import { Navigate } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";

const isAuth = true;

const PrivateRoute = ({ children }) => {
  return isAuth ? (
    <DefaultLayout>{children}</DefaultLayout>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoute;
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Navigate } from "react-router-dom";
import { fetchNewAccessJWT } from "../../api/userApi";
import { getUserProfile } from "../../pages/dashboard/userAction";
import { loginSuccess } from "../../pages/entry/entry.slice";
import DefaultLayout from "../layout/DefaultLayout";

const PrivateRoute = ({ children }) => {
  const { isAuth } = useSelector((store) => store.login);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const updateAccessJWT = async () => {
      try {
        const result = await fetchNewAccessJWT();
        result && dispatch(loginSuccess());

        !user._id && dispatch(getUserProfile());

        !sessionStorage.getItem("accessJWT") &&
          localStorage.getItem("crmSite") &&
          updateAccessJWT();
      } catch (error) {
        console.log("error", error);
      }
    };

    updateAccessJWT();

    sessionStorage.getItem("accessJWT") && dispatch(loginSuccess());
  }, [dispatch, isAuth, user]);

  return isAuth ? (
    <DefaultLayout>{children}</DefaultLayout>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoute;

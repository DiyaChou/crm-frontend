import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AlertBox from "../../components/AlertBox/AlertBox.comp";
import { userRegistrationVerificationAction } from "./userVerification.action";

const UserVerification = () => {
  const { _id, email } = useParams();
  console.log(_id, email);
  const dispatch = useDispatch();
  const { isLoading, status, message } = useSelector(
    (state) => state.userVerification
  );

  useEffect(() => {
    dispatch(userRegistrationVerificationAction({ _id, email }));
  }, []);

  //call api and send the _id to verify user

  return (
    <div className="registeration">
      <div className="form_wrapper">
        {message && (
          <AlertBox
            variant={status === "success" ? "success" : "error"}
            text={message}
          />
        )}
      </div>
    </div>
  );
};

export default UserVerification;

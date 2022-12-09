import { userRegistrationVerification } from "../../api/userApi";
import {
  userVerificationFail,
  userVerificationPending,
  userVerificationSuccess,
} from "./userVerification.slice";

export const userRegistrationVerificationAction =
  (data) => async (dispatch) => {
    dispatch(userVerificationPending());
    try {
      const result = await userRegistrationVerification(data);
      if (result.status === "success")
        return dispatch(userVerificationSuccess(result.message));
      dispatch(userVerificationFail(result.message));
    } catch (error) {
      dispatch(userVerificationFail(error.message));
    }
  };

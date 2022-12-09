import { userRegistration } from "../../api/userApi";
import {
  registrationFail,
  registrationPending,
  registrationSuccess,
} from "./registration.slice";

export const newUserRegistration = (formData) => async (dispatch) => {
  dispatch(registrationPending());

  try {
    const result = await userRegistration(formData);
    console.log("newUserRegistration action", result);
    if (result.status === "success") {
      return dispatch(registrationSuccess(result.message));
    }
    dispatch(registrationFail(result.message));
  } catch (error) {
    dispatch(registrationFail(error.message));
  }
};

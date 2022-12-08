import { fetchUser } from "../../api/userApi";
import { getUserPending, getUserSuccess, getUserFail } from "./userSlice";

export const getUserProfile = () => async (dispatch) => {
  try {
    dispatch(getUserPending());
    //call the api
    const result = await fetchUser();
    if (result.user && result.user._id)
      return dispatch(getUserSuccess(result.user));

    dispatch(getUserFail("User is not found"));
  } catch (error) {
    dispatch(getUserFail(error.message));
  }
};

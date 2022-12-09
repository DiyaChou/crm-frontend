import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
};

const userVerificationSlice = createSlice({
  name: "userVerification",
  initialState,
  reducers: {
    userVerificationPending: (state) => {
      state.isLoading = true;
    },
    userVerificationSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = "success";
      state.message = "User verification is successful";
    },
    userVerificationFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = "error";
      state.message = "User verification failed";
    },
    userVerificaitonReset: (state) => {
      state.isLoading = false;
      state.status = "";
      state.message = "";
    },
  },
});

export const {
  userVerificaitonReset,
  userVerificationFail,
  userVerificationPending,
  userVerificationSuccess,
} = userVerificationSlice.actions;

export default userVerificationSlice.reducer;

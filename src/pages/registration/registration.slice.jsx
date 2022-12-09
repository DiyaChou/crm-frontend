import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    registrationPending: (state) => {
      state.isLoading = true;
    },
    registrationSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = "success";
      state.message = payload;
    },
    registrationFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = "error";
      state.message = payload;
    },
    resetRegisterState: (state) => {
      state.isLoading = false;
      state.status = "";
      state.message = "";
    },
  },
});

export const {
  registrationPending,
  registrationFail,
  registrationSuccess,
  resetRegisterState,
} = registerSlice.actions;

export default registerSlice.reducer;

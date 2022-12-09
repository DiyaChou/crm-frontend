import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: "",
  successMsg: "",
};

const newTicketSlice = createSlice({
  name: "newTicket",
  initialState,
  reducers: {
    openNewTicketPending: (state) => {
      state.isLoading = true;
    },
    openNewTicketSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.successMsg = payload;
    },
    openNewTicketFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    resetNewTicketState: (state, { payload }) => {
      state.isLoading = false;
      state.error = "";
      state.successMsg = "";
    },
  },
});

export const {
  openNewTicketFail,
  openNewTicketPending,
  openNewTicketSuccess,
  resetNewTicketState,
} = newTicketSlice.actions;

export default newTicketSlice.reducer;

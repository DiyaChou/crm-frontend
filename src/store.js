import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./pages/entry/entry.slice";
import ticketReducer from "./pages/ticket-listing/ticketSlice";

const store = configureStore({
  reducer: {
    tickets: ticketReducer,
    login: loginReducer,
  },
});

export default store;

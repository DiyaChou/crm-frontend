import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./pages/dashboard/userSlice";
import loginReducer from "./pages/entry/entry.slice";
import ticketReducer from "./pages/ticket-listing/ticketSlice";

const store = configureStore({
  reducer: {
    tickets: ticketReducer,
    login: loginReducer,
    user: userReducer,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./pages/dashboard/userSlice";
import loginReducer from "./pages/entry/entry.slice";
import ticketReducer from "./pages/ticket-listing/ticketSlice";
import newTicketReducer from "./components/addTicketForm/addTicketSlice";
import registrationReducer from "./pages/registration/registration.slice";
import userVerificationReducer from "./pages/userVerification/userVerification.slice";

const store = configureStore({
  reducer: {
    tickets: ticketReducer,
    login: loginReducer,
    user: userReducer,
    newTicket: newTicketReducer,
    registration: registrationReducer,
    userVerification: userVerificationReducer,
  },
});

export default store;

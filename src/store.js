import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./pages/dashboard/userSlice";
import loginReducer from "./pages/entry/entry.slice";
import ticketReducer from "./pages/ticket-listing/ticketSlice";
import newTicketReducer from "./components/addTicketForm/addTicketSlice";

const store = configureStore({
  reducer: {
    tickets: ticketReducer,
    login: loginReducer,
    user: userReducer,
    newTicket: newTicketReducer,
  },
});

export default store;

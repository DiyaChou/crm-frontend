import { getAllTickets } from "../../api/ticketApi.js";
import {
  fetchTicketFail,
  fetchTicketLoading,
  fetchTicketSuccess,
  searchTickets,
} from "./ticketSlice.jsx";

export const fetchAllTickets = () => async (dispatch) => {
  console.log("hi");
  dispatch(fetchTicketLoading());
  try {
    let result = await getAllTickets();

    dispatch(fetchTicketSuccess(result.data.result));
  } catch (error) {
    dispatch(fetchTicketFail(error.message));
  }
};

export const filterSearchTicket = (str) => (dispatch) => {
  dispatch(searchTickets(str));
};

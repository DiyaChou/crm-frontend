import {
  getAllTickets,
  getSingleTicket,
  updateReplyTicket,
  updateTicketStatusClosed,
} from "../../api/ticketApi.js";
import {
  fetchSingleTicketSuccess,
  fetchTicketFail,
  fetchTicketLoading,
  fetchTicketSuccess,
  replyTicketFail,
  replyTicketLoading,
  replyTicketSuccess,
  searchTickets,
  closeTicketLoading,
  closeTicketSuccess,
  closeTicketFail,
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

export const fetchSingleTicket = (_id) => async (dispatch) => {
  dispatch(fetchTicketLoading());
  try {
    const result = await getSingleTicket(_id);
    dispatch(fetchSingleTicketSuccess(result.data.result));
  } catch (error) {
    dispatch(fetchTicketFail(error.message));
  }
};

export const filterSearchTicket = (str) => (dispatch) => {
  dispatch(searchTickets(str));
};

export const replyOnTicket = (_id, msgObj) => async (dispatch) => {
  dispatch(replyTicketLoading());
  try {
    const result = await updateReplyTicket(_id, msgObj);
    console.log(result);
    if (result.status === "error") {
      dispatch(replyTicketFail(result.message));
      return;
    }

    dispatch(fetchSingleTicket(_id));

    dispatch(replyTicketSuccess(result.message));
  } catch (error) {
    dispatch(replyTicketFail(error.message));
  }
};

export const closeTicket = (_id) => async (dispatch) => {
  dispatch(closeTicketLoading());
  try {
    const result = await updateTicketStatusClosed(_id);
    console.log(result);
    if (result.status === "error") {
      return dispatch(closeTicketFail(result.message));
    }
    dispatch(fetchSingleTicket(_id));
    dispatch(closeTicketSuccess(result.message));
  } catch (error) {
    dispatch(closeTicketFail(error.message));
  }
};

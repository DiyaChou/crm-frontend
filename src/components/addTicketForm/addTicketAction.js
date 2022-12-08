import { createNewTicket } from "../../api/ticketApi.js";
import {
  openNewTicketFail,
  openNewTicketPending,
  openNewTicketSuccess,
} from "./addTicketSlice.js";

export const openNewTicket = (formData) => async (dispatch) => {
  dispatch(openNewTicketPending());
  try {
    const result = await createNewTicket(formData);
    console.log("result opennewticket: ", result);
    if (result.status === "success")
      dispatch(openNewTicketSuccess(result.message));
    dispatch(openNewTicketFail(result.message));
  } catch (error) {
    console.log(error);
    dispatch(openNewTicketFail(error.message));
  }
};

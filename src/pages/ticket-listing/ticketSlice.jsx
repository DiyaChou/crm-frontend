import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tickets: [],
  selectedTicket: {},
  searchTicketList: [],
  isLoading: false,
  error: "",
  replyTicketError: "",
  replyMsg: "",
};

const ticketListSlice = createSlice({
  name: "ticketList",
  initialState,
  reducers: {
    fetchTicketLoading: (state) => {
      state.isLoading = true;
    },
    fetchTicketSuccess: (state, action) => {
      state.tickets = action.payload;
      state.searchTicketList = action.payload;
      state.isLoading = false;
    },
    fetchTicketFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    searchTickets: (state, { payload }) => {
      state.searchTicketList = state.tickets.filter((row, i) => {
        if (!payload) return row;
        return row.subject.toLowerCase().includes(payload.toLowerCase());
      });
    },
    fetchSingleTicketSuccess: (state, action) => {
      state.isLoading = false;
      state.selectedTicket = action.payload;
    },
    replyTicketLoading: (state) => {
      state.isLoading = true;
    },
    replyTicketSuccess: (state, action) => {
      state.replyMsg = action.payload;
      state.isLoading = false;
      state.replyTicketError = "";
    },
    replyTicketFail: (state, action) => {
      state.isLoading = false;
      state.replyTicketError = action.payload;
    },
    closeTicketLoading: (state) => {
      state.isLoading = true;
    },
    closeTicketSuccess: (state, action) => {
      state.replyMsg = action.payload;
      state.isLoading = false;
      state.error = "";
    },
    closeTicketFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

const { reducer, actions } = ticketListSlice;

// Action creators are generated for each case reducer function
export const {
  fetchTicketLoading,
  fetchTicketSuccess,
  fetchTicketFail,
  searchTickets,
  fetchSingleTicketSuccess,
  replyTicketLoading,
  replyTicketSuccess,
  replyTicketFail,
  closeTicketLoading,
  closeTicketSuccess,
  closeTicketFail,
} = actions;

export default reducer;

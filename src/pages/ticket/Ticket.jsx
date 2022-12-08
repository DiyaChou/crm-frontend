import React, { useEffect } from "react";
import MessageHistory from "../../components/message-history/MessageHistory.comp";
import UpdateTicket from "../../components/update-ticket/UpdateTicket";
import "./Ticket.style.css";
import { useParams } from "react-router-dom";
import {
  closeTicket,
  fetchSingleTicket,
} from "../ticket-listing/ticketActions";
import { useDispatch, useSelector } from "react-redux";
import loadingGif from "../../assets/gifs/Spinner.gif";
import AlertBox from "../../components/AlertBox/AlertBox.comp";

const Ticket = () => {
  const { tId } = useParams();
  const dispatch = useDispatch();
  const { selectedTicket, isLoading, error, replymsg } = useSelector(
    (state) => state.tickets
  );
  useEffect(() => {
    dispatch(fetchSingleTicket(tId));
  }, [tId, dispatch]);

  return (
    <div>
      <div className="ticket__info">
        {isLoading && <img src={loadingGif} alt="loading" />}
        {error && <AlertBox varient="error" text={error} />}
        {replymsg}
        <div className="ticket__info__container">
          <div className="subject">Subject: {selectedTicket.subject}</div>
          <div className="addedAt">Ticket Opened: {selectedTicket.openAt}</div>
          <div className="status">Status: {selectedTicket.status}</div>
        </div>
        <button
          className="btn"
          disabled={selectedTicket.status === "Closed"}
          onClick={() => dispatch(closeTicket(tId))}
        >
          Close Ticket
        </button>
      </div>
      <div>
        <MessageHistory msg={selectedTicket.conversation} />
      </div>
      <UpdateTicket tId={tId} />
    </div>
  );
};

export default Ticket;

import React, { useState } from "react";
import tickets from "../../dummydata/ticket.dummydata.json";
import MessageHistory from "../../components/message-history/MessageHistory.comp";
import UpdateTicket from "../../components/update-ticket/UpdateTicket";
import "./Ticket.style.css";

const ticket = tickets[0];
const Ticket = () => {
  const [message, setMessage] = useState("");

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };
  const handleOnSubmit = (e) => {
    alert("form submitted");
  };

  return (
    <div>
      <div className="ticket__info">
        <div className="ticket__info__container">
          <div className="subject">{ticket.subject}</div>
          <div className="addedAt">{ticket.addedAt}</div>
          <div className="status">{ticket.status}</div>
        </div>
        <button className="btn">Close Ticket</button>
      </div>
      <div>
        <MessageHistory msg={ticket.history} />
      </div>
      <UpdateTicket
        msg={message}
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
      />
    </div>
  );
};

export default Ticket;

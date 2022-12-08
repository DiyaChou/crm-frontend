import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AlertBox from "../AlertBox/AlertBox.comp";

import { replyOnTicket } from "../../pages/ticket-listing/ticketActions";
import "./Update.Ticket.style.css";
const UpdateTicket = ({ tId }) => {
  const { user } = useSelector((state) => state.user);
  const { replyMsg } = useSelector((state) => state.tickets);
  console.log("user", user);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const msgObj = {
      sender: user.name,
      message,
    };
    dispatch(replyOnTicket(tId, msgObj));
  };

  return (
    <div>
      {replyMsg && <AlertBox varient="success" text={replyMsg} />}
      <form className="form__container" onSubmit={handleOnSubmit}>
        <label htmlFor="updateticket__input" className="form__label">
          Reply
        </label>
        <textarea
          name="updateticket__input"
          id="updateticket__input"
          rows="5"
          value={message}
          onChange={handleOnChange}
        ></textarea>
        <div className="updateticket__button_container">
          <button className="btn">Reply</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateTicket;

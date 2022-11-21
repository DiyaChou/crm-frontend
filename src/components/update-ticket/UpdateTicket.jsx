import React from "react";
import "./Update.Ticket.style.css";
const UpdateTicket = ({ msg, handleOnChange, handleOnSubmit }) => {
  return (
    <div>
      <form className="form__container" onSubmit={handleOnSubmit}>
        <label htmlFor="updateticket__input" className="form__label">
          Reply
        </label>
        <textarea
          name="updateticket__input"
          id="updateticket__input"
          rows="5"
          value={msg}
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

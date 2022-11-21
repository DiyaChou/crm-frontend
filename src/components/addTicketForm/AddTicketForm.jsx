import React, { useState } from "react";
import "./AddTicketForm.style.css";

const AddTicketForm = () => {
  const [formState, setFormState] = useState({
    subject: "",
    status: "",
    addedAt: "",
  });
  const [formErrorsState, setFormErrorsState] = useState({
    subject: "",
    status: "",
    addedAt: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = () => {};

  return (
    <section id="add_ticket_form">
      <div className="form_wrapper">
        <h1 className="form__title">Add Ticket</h1>
        <hr />
        <form className="form">
          <div className="add_ticket__form__container">
            <label className="add_ticket__form__label" htmlFor="subject">
              Subject
            </label>
            <input
              className="add_ticket__form__input "
              type="text"
              placeholder="Enter subject"
              id="subject"
              value={formState.subject}
              name="subject"
              onChange={handleOnChange}
            />
          </div>
          <div className="add_ticket__form__container">
            <label className="add_ticket__form__label" htmlFor="addedAt">
              Issue Found
            </label>
            <input
              className="add_ticket__form__input"
              type="date"
              id="addedAt"
              value={formState.addedAt}
              name="addedAt"
              onChange={handleOnChange}
            />
          </div>
          <div className="form__container">
            <label className="form__label" htmlFor="status">
              Status
            </label>
            <textarea
              className="form__input"
              placeholder="..."
              id="status"
              value={formState.status}
              name="status"
              rows="5"
              onChange={handleOnChange}
            />
          </div>
          <button
            className="btn w-full add_ticket_form__btn"
            onClick={handleSubmit}
          >
            Add Ticket
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddTicketForm;

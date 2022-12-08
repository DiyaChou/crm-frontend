import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shortText } from "../../utils/validation";
import { openNewTicket } from "./addTicketAction";
import "./AddTicketForm.style.css";

const AddTicketForm = () => {
  const dispatch = new useDispatch();
  const initialFormData = {
    subject: "",
    message: "",
    openAt: "",
  };

  const initialFormErrorData = {
    subject: "",
    message: "",
    openAt: "",
  };

  const {
    user: { name },
  } = useSelector((state) => state.user);

  const [formData, setFormData] = useState(initialFormData);
  const [formDataErrors, setFormDataError] = useState(initialFormErrorData);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isSubjectValid = shortText(formData.subject);

    setFormDataError({
      ...initialFormData,
      subject: !isSubjectValid,
    });
    dispatch(openNewTicket({ ...formData, sender: name }));
  };

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
              value={formData.subject}
              name="subject"
              onChange={handleOnChange}
            />
          </div>
          <div className="add_ticket__form__container">
            <label className="add_ticket__form__label" htmlFor="openAt">
              Issue Found
            </label>
            <input
              className="add_ticket__form__input"
              type="date"
              id="openAt"
              value={formData.openAt}
              name="openAt"
              onChange={handleOnChange}
            />
          </div>
          <div className="form__container">
            <label className="form__label" htmlFor="message">
              message
            </label>
            <textarea
              className="form__input"
              placeholder="..."
              id="message"
              value={formData.message}
              name="message"
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

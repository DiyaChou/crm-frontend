import React from "react";
import { useDispatch } from "react-redux";
import { filterSearchTicket } from "../../pages/ticket-listing/ticketActions";

const SearchForm = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(filterSearchTicket(value));
  };

  return (
    <div className="form__container">
      <form>
        <label htmlFor="searchStr" className="form__label">
          Search:{" "}
        </label>
        <input
          type="text"
          name="searchStr"
          id="searchStr"
          placeholder="Search ..."
          className="form__input"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default SearchForm;

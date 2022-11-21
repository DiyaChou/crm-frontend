import React from "react";

const SearchForm = ({ handleOnChange, str }) => {
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
          onChange={handleOnChange}
          value={str}
        />
      </form>
    </div>
  );
};

export default SearchForm;

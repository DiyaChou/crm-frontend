import React, { useEffect, useState } from "react";
import SearchForm from "../../components/search-form/SearchForm.comp";
import TicketTable from "../../components/ticketTable/TicketTable";
import "./TicketListing.style.css";
import { Link } from "react-router-dom";
import { fetchAllTickets } from "./ticketActions";
import { useDispatch, useSelector } from "react-redux";

const TicketListing = () => {
  const dispatch = useDispatch();
  const { searchTicketList, isLoading, error } = useSelector(
    (state) => state.tickets
  );
  const [str, setStr] = useState("");

  useEffect(() => {
    console.log(1);
    dispatch(fetchAllTickets());
  }, [str, dispatch]);

  useEffect(() => {
    console.log(searchTicketList);
  }, [searchTicketList]);

  return (
    <div className="ticket_listing">
      {/* <PageBreadcrumb /> */}
      <div className="ticket_listing__container">
        <Link to="/add-ticket">
          <button className="btn">Add New Ticket</button>
        </Link>
        <SearchForm />
      </div>
      <TicketTable tickets={searchTicketList} />
    </div>
  );
};

export default TicketListing;

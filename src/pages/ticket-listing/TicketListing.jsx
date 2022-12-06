import React, { useEffect, useState } from "react";
import SearchForm from "../../components/search-form/SearchForm.comp";
import TicketTable from "../../components/ticketTable/TicketTable";
import "./TicketListing.style.css";
import tickets from "../../dummydata/ticket.dummydata.json";
import { Link } from "react-router-dom";
import { fetchAllTickets } from "./ticketActions";
import { useDispatch } from "react-redux";

const TicketListing = () => {
  const dispatch = useDispatch();

  const [str, setStr] = useState("");
  const [displayTicket, setDisplayTicket] = useState(tickets);

  useEffect(() => {
    console.log(1);
    dispatch(fetchAllTickets());
  }, [str, displayTicket]);

  return (
    <div className="ticket_listing">
      {/* <PageBreadcrumb /> */}
      <div className="ticket_listing__container">
        <Link to="/add-ticket">
          <button className="btn">Add New Ticket</button>
        </Link>
        <SearchForm />
      </div>
      <TicketTable tickets={displayTicket} />
    </div>
  );
};

export default TicketListing;

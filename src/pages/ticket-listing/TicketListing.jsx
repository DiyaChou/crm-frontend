import React, { useEffect, useState } from "react";
import SearchForm from "../../components/search-form/SearchForm.comp";
import TicketTable from "../../components/ticketTable/TicketTable";
import "./TicketListing.style.css";
import tickets from "../../dummydata/ticket.dummydata.json";

const TicketListing = () => {
  const [str, setStr] = useState("");
  const [displayTicket, setDisplayTicket] = useState(tickets);

  // useEffect(() => {}, [str, displayTicket]);

  const handleOnChange = (e) => {
    setStr(e.target.value);
    searchTicket(e.target.value);
  };

  const searchTicket = (sttr) => {
    const displayTickets = tickets.filter((row) =>
      row.subject.toLowerCase().includes(sttr.toLowerCase())
    );
    setDisplayTicket(displayTickets);
  };
  return (
    <div className="ticket_listing">
      {/* <PageBreadcrumb /> */}
      <div className="ticket_listing__container">
        <button className="btn">Add New Ticket</button>
        <SearchForm handleOnChange={handleOnChange} str={str} />
      </div>
      <TicketTable tickets={displayTicket} />
    </div>
  );
};

export default TicketListing;

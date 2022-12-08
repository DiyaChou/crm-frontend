import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TicketTable from "../../components/ticketTable/TicketTable";
import { fetchAllTickets } from "../ticket-listing/ticketActions";
import "./Dashboard.style.css";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { tickets } = useSelector((state) => state.tickets);

  useEffect(() => {
    if (!tickets.length) dispatch(fetchAllTickets());
  }, [dispatch, tickets]);

  // const pendingTickets = tickets.filter((row) => row.status !== "Closed");
  // const totlatTickets = tickets.length;
  return (
    <section id="dashboard">
      <div className="dashboard__top">
        <Link to="/add-ticket">
          <button className="btn dashboard_btn">Add new Ticket</button>
        </Link>
        <span>Total tickets: 50</span>
        <span>Pending tickets: 5</span>
      </div>
      <div className="dashboard__table_wrapper">
        <span>Recently Added tickets</span>
        <TicketTable tickets={tickets} />
      </div>
    </section>
  );
};

export default Dashboard;

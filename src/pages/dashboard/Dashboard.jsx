import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TicketTable from "../../components/ticketTable/TicketTable";
import { fetchAllTickets } from "../ticket-listing/ticketActions";
import "./Dashboard.style.css";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { tickets } = useSelector((state) => state.tickets);
  const pendingTickets = tickets.filter(
    (row) => row.status !== "Closed"
  ).length;
  const totalTickets = tickets.length;

  useEffect(() => {
    if (!tickets.length) dispatch(fetchAllTickets());
  }, [dispatch, tickets]);

  return (
    <section id="dashboard">
      <div className="dashboard__top">
        <Link to="/add-ticket">
          <button className="btn dashboard_btn">Add new Ticket</button>
        </Link>
        <span>Total tickets: {totalTickets}</span>
        <span>Pending tickets: {pendingTickets}</span>
      </div>
      <div className="dashboard__table_wrapper">
        <span>Recently Added tickets</span>
        <TicketTable tickets={tickets} />
      </div>
    </section>
  );
};

export default Dashboard;

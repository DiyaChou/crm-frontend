import React from "react";
import { Link } from "react-router-dom";
import TicketTable from "../../components/ticketTable/TicketTable";
import "./Dashboard.style.css";

const Dashboard = () => {
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
        <TicketTable />
      </div>
    </section>
  );
};

export default Dashboard;

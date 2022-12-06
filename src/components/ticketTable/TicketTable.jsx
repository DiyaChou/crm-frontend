import React from "react";
import "./TicketTable.style.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const TicketTable = () => {
  const { searchTicketList, isLoading, error } = useSelector(
    (state) => state.tickets
  );

  return (
    <table className="ticket_table">
      <thead>
        <tr className="ticket_table__row ticket_table__header_row">
          <th className="ticket_table__column ticket_table__header_column">
            #
          </th>
          <th className="ticket_table__column ticket_table__header_column">
            Subjects
          </th>
          <th className="ticket_table__column ticket_table__header_column">
            Status
          </th>
          <th className="ticket_table__column ticket_table__header_column">
            Opened Date
          </th>
        </tr>
      </thead>
      <tbody>
        {searchTicketList && searchTicketList.length ? (
          searchTicketList.map((row) => (
            <tr key={row._id} className="ticket_table__row">
              <td className="ticket_table__column">{row._id}</td>
              <td className="ticket_table__column">
                <Link to={`/ticket/${row._id}`}>{row.subject}</Link>
              </td>
              <td className="ticket_table__column">{row.status}</td>
              <td className="ticket_table__column">{row.addedAt}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td>"no ticket to show"</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TicketTable;

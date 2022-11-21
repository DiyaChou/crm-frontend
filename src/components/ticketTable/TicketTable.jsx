import React from "react";
import "./TicketTable.style.css";
import tickets from "../../dummydata/ticket.dummydata.json";

const TicketTable = ({ tickets }) => {
  return (
    <table className="ticket_table">
      <tr className="ticket_table__row ticket_table__header_row">
        <th className="ticket_table__column ticket_table__header_column">#</th>
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
      {tickets.length ? (
        tickets.map((row) => (
          <tr key={row.id} className="ticket_table__row">
            <td className="ticket_table__column">{row.id}</td>
            <td className="ticket_table__column">{row.subject}</td>
            <td className="ticket_table__column">{row.status}</td>
            <td className="ticket_table__column">{row.addedAt}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td>"no ticket to show"</td>
        </tr>
      )}
    </table>
  );
};

export default TicketTable;

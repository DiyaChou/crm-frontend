import "./App.css";
import DefaultLayout from "./components/layout/DefaultLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Entry from "./pages/entry/Entry";
import AddTicket from "./pages/new ticket/AddTicket";
import TicketListing from "./pages/ticket-listing/TicketListing";
import Ticket from "./pages/ticket/Ticket";

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout children={<Ticket />} />
    </div>
  );
}

export default App;

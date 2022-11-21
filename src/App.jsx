import "./App.css";
import DefaultLayout from "./components/layout/DefaultLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Entry from "./pages/entry/Entry";
import AddTicket from "./pages/new ticket/AddTicket";
import TicketListing from "./pages/ticket-listing/TicketListing";

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout children={<TicketListing />} />
    </div>
  );
}

export default App;

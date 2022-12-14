import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import Entry from "./pages/entry/Entry";
import AddTicket from "./pages/new ticket/AddTicket";
import TicketListing from "./pages/ticket-listing/TicketListing";
import Ticket from "./pages/ticket/Ticket";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/private-route/PrivateRoute.comp";
import Registration from "./pages/registration/Registration.page";
import UserVerification from "./pages/userVerification/UserVerification.page";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Entry />} />
        <Route path="/register" element={<Registration />} />
        <Route
          path="/verification/:_id/:email"
          element={<UserVerification />}
        />
        <Route
          index
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/add-ticket"
          element={
            <PrivateRoute>
              <AddTicket />
            </PrivateRoute>
          }
        />
        <Route
          path="/tickets"
          element={
            <PrivateRoute>
              <TicketListing />
            </PrivateRoute>
          }
        />
        <Route
          path="/ticket/:tId"
          element={
            <PrivateRoute>
              <Ticket />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

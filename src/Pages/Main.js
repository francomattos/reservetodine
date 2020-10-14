import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import AboutPage from "./AboutPage";
import ReservationTable from "./ReservationTable";

export default function Main() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/reservation-table" component={ReservationTable} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./UI/Navbar/Navbar";
import Home from "./container/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import FloatingButton from "./component/FloatingButton/FloatingButton";
import asyncComponent from "./hoc/asyncComponent/asyncComponent";
import withErrorHandler from "./hoc/withErrorHandler/withErrorHandler";
import axios from "axios";
const asyncContact = asyncComponent(() => {
  return import("./container/Contact/Contact");
});

const asyncTracker = asyncComponent(() => {
  return import("./container/Tracker/Tracker");
});

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <FloatingButton />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/tracker" component={asyncTracker} />
          <Route path="/review" component={asyncContact} />
        </Switch>
      </div>
    </Router>
  );
}

export default withErrorHandler(App, axios);

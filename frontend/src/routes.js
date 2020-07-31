import React from "react";
import { Route, Switch } from "react-router";
import QuarterbacksContainer from "./containers/QuarterbacksContainer";
import NavBar from "./components/nav/NavBar";
import Home from "./components/home/Home";
// import NoMatch from "./components/nomatch/NoMatch";
// import Errors from "./components/nomatch/Errors";

const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/quarterbacks" component={QuarterbacksContainer} />
      {/* <Route exact path="/errors" component={Errors} />
      <Route component={NoMatch} /> */}
    </Switch>
  </div>
);

export default routes;

import React from "react";
import "./App.css";
import { ConnectedRouter } from "connected-react-router";
import routes from "./routes";

function App({ history }) {
  return <ConnectedRouter history={history}>{routes}</ConnectedRouter>;
}

export default App;

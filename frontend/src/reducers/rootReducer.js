import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import quarterbackReducer from "./quarterbackReducer";

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    quarterbacks: quarterbackReducer,
  });

export default rootReducer;

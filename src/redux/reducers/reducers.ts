import { combineReducers } from "redux";

import dataFetching from "./dataFetching";
import dataPosting from "./dataPosting";

export default combineReducers({
  dataFetching,
  dataPosting,
});

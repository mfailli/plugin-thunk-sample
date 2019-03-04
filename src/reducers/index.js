import { combineReducers } from "redux";
import { FlexReducer } from "@twilio/flex-ui";
import { verify } from "./validator";

export default combineReducers({
  flex: FlexReducer,
  verify
});

import { combineReducers } from "redux";
import toggleMobileModal from "./toggleMobileModal";
import setLoginInfo from "./setLoginInfo";
import toggleInit from "./setInit";

const rootReducer = combineReducers({
  toggleMobileModal,
  setLoginInfo,
  toggleInit,
});

export default rootReducer;

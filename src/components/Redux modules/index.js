import { combineReducers } from "redux";
import toggleMobileModal from "./toggleMobileModal";
import setLoginInfo from "./setLoginInfo";

const rootReducer = combineReducers({
  toggleMobileModal,
  setLoginInfo,
});

export default rootReducer;

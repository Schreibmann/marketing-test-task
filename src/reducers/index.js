import { combineReducers } from "redux";
import appContainerReducer from "./appContainerReducer";

export default combineReducers({
	usr: appContainerReducer
});

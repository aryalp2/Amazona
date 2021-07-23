import { combineReducers } from "redux";
import productReducers from "./productReducers";

const reducer = combineReducers({
	productReducers,
});

export default reducer;

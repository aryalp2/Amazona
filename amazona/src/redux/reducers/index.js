import { combineReducers } from "redux";
import productReducers from "./productReducers";
import detailReducer from "./detailReducer";

const reducer = combineReducers({
	productReducers,
	detailReducer,
});

export default reducer;

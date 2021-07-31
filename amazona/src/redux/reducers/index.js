import { combineReducers } from "redux";
import productReducers from "./productReducers";
import detailReducer from "./detailReducer";
import cartReducer from "./cartReducer";

const reducer = combineReducers({
	productReducers,
	detailReducer,
	cartReducer,
});

export default reducer;

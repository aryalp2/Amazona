import { combineReducers } from "redux";
import productReducers from "./productReducers";
import detailReducer from "./detailReducer";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";

const reducer = combineReducers({
	productReducers,
	detailReducer,
	cartReducer,
	userReducer,
});

export default reducer;

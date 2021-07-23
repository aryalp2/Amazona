/* eslint-disable import/no-anonymous-default-export */
import {
	PRODUCT_LIST_FAIL,
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
} from "../constants/index";

const initialState = {
	loading: true,
	products: [],
	error: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case PRODUCT_LIST_SUCCESS:
			return {
				...state,
				loading: false,
				products: action.payload,
			};
		case PRODUCT_LIST_REQUEST:
			return {
				...state,
				loading: true,
			};
		case PRODUCT_LIST_FAIL:
			return {
				...state,
				loading: false,
				error: true,
			};
		default:
			return state;
	}
};

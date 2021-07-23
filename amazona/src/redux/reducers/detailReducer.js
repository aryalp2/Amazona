/* eslint-disable import/no-anonymous-default-export */
import {
	PRODUCT_DETAILS_FAIL,
	PRODUCT_DETAILS_REQUEST,
	PRODUCT_DETAILS_SUCCESS,
} from "../constants/index";

const initialState = {
	loading: true,
	product: {},
	error: "",
};

export default (state = initialState, action) => {
	switch (action.type) {
		case PRODUCT_DETAILS_SUCCESS:
			return {
				...state,
				loading: false,
				product: action.payload,
			};
		case PRODUCT_DETAILS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case PRODUCT_DETAILS_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

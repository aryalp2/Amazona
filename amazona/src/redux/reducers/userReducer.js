/* eslint-disable import/no-anonymous-default-export */
import {
	USER_SIGNIN_FAIL,
	USER_SIGNIN_REQUEST,
	USER_SIGNIN_SUCCESS,
	USER_SIGNOUT,
} from "../constants";

const initialState = {
	loading: false,
	userInfo: {},
	error: "",
};

export default (state = initialState, action) => {
	switch (action.type) {
		case USER_SIGNIN_REQUEST:
			return { ...state, loading: true };
		case USER_SIGNIN_SUCCESS:
			return { ...state, loading: false, userInfo: action.payload };
		case USER_SIGNIN_FAIL:
			return { ...state, loading: false, error: action.payload };
		case USER_SIGNOUT:
			return {};
		default:
			return state;
	}
};

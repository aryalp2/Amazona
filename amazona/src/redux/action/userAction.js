import Axios from "axios";
import { load } from "dotenv";
import {
	BASEURL,
	USER_SIGNIN_FAIL,
	USER_SIGNIN_REQUEST,
	USER_SIGNIN_SUCCESS,
	USER_SIGNOUT,
} from "../constants";

export const signIn = (email, password) => async (dispatch) => {
	dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
	try {
		const { data } = await Axios.post(`${BASEURL}/api/users/signin`, {
			email,
			password,
		});
		dispatch({
			type: USER_SIGNIN_SUCCESS,
			payload: data,
		});
		localStorage.setItem("userInfo", JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: USER_SIGNIN_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const signOut = () => async (dispatch) => {
	localStorage.removeItem("userInfo");
	localStorage.removeItem("cartItems");
	dispatch({ type: USER_SIGNOUT });
};

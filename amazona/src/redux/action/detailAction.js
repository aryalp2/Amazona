import Axios from "axios";
import {
	BASEURL,
	PRODUCT_DETAILS_REQUEST,
	PRODUCT_DETAILS_FAIL,
	PRODUCT_DETAILS_SUCCESS,
} from "../constants";

export const detailProduct = (productId) => async (dispatch) => {
	dispatch({
		type: PRODUCT_DETAILS_REQUEST,
	});
	try {
		const { data } = await Axios.get(
			`${BASEURL}/api/products/${productId}`
		);
		dispatch({
			type: PRODUCT_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: PRODUCT_DETAILS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

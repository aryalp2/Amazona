import Axios from "axios";
import { CART_ADD_ITEM, BASEURL } from "../constants";

export const addToCart = (productId, qty) => async (dispatch, getState) => {
	try {
		const { data } = await Axios.get(
			`${BASEURL}/api/products/${productId}`
		);
		dispatch({
			type: CART_ADD_ITEM,
			payload: {
				name: data.name,
				image: data.image,
				price: data.price,
				countInStock: data.countInStock,
				product: data._id,
				qty,
			},
		});
		localStorage.setItem(
			"cartItems",
			JSON.stringify(getState().cart.cartItems)
		);
	} catch (error) {
		console.error(error);
	}
};

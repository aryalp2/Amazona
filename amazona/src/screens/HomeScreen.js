import React, { useEffect } from "react";
import Product from "../components/Product";
import LoadingBox from "../components/LoadingBox";
import Message from "../components/Message";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../redux/action/productAction";

const HomeScreen = () => {
	const dispatch = useDispatch();
	const { loading, products, error } = useSelector(
		(state) => state.productReducers
	);
	useEffect(() => {
		dispatch(listProducts());
	}, [dispatch]);
	return (
		<div>
			{loading ? (
				<LoadingBox></LoadingBox>
			) : error ? (
				<Message variant="danger"> {error} </Message>
			) : (
				<div className="row center">
					{products.map((product) => {
						return <Product key={product._id} product={product} />;
					})}
				</div>
			)}
		</div>
	);
};

export default HomeScreen;

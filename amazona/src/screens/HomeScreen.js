import React, { useEffect, useState } from "react";
// import data from "../data";
import Product from "../components/Product";
import axios from "axios";
import LoadingBox from "../components/LoadingBox";
import Message from "../components/Message";

const HomeScreen = () => {
	const baseURL = "http://localhost:5000";
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const { data } = await axios.get(`${baseURL}/api/products`);
				setLoading(false);
				setProducts(data);
			} catch (error) {
				setError(error.message);
				setLoading(false);
			}
		};
		fetchData();
	}, []);
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

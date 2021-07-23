import React from "react";
import data from "../data";
import Product from "../components/Product";

const HomeScreen = () => {
	return (
		<div className="row center">
			{data.products.map((product) => {
				return <Product key={product._id} product={product} />;
			})}
		</div>
	);
};

export default HomeScreen;

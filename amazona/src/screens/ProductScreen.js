import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import LoadingBox from "../components/LoadingBox";
import Message from "../components/Message";
import { useDispatch, useSelector } from "react-redux";
import { detailProduct } from "../redux/action/detailAction";

const ProductScreen = (props) => {
	const dispatch = useDispatch();
	const productId = props.match.params.id;
	const { error, loading, product } = useSelector(
		(state) => state.detailReducer
	);

	useEffect(() => {
		dispatch(detailProduct(productId));
	}, [dispatch, productId]);

	if (!product) {
		return <div>Product doesnot exist</div>;
	}
	return (
		<div>
			<Link to="/">Back to result</Link>
			{loading ? (
				<LoadingBox></LoadingBox>
			) : error ? (
				<Message variant="danger"> {error} </Message>
			) : (
				<div className="row top">
					<div className="col-2">
						<img
							className="large"
							src={product.image}
							alt={product.name}
						/>
					</div>
					<div className="col-1">
						<ul>
							<li> {product.name} </li>
							<li>
								<Rating
									rating={product.rating}
									numReviews={product.numReviews}
								/>
							</li>
							<li> ${product.price} </li>
							<li>
								{" "}
								Description: <p> {product.description} </p>{" "}
							</li>
						</ul>
					</div>
					<div className="col-1">
						<div className="card card-body">
							<ul>
								<li>
									<div className="row">
										<div>Price</div>
										<div>${product.price}</div>
									</div>
								</li>
								<li>
									<div className="row">
										<div>Status</div>
										<div>
											{product.countInStock > 0 ? (
												<span className="success">
													In Stock
												</span>
											) : (
												<span className="danger">
													{" "}
													Unavailable{" "}
												</span>
											)}{" "}
										</div>
									</div>
								</li>
								<li>
									<button className="primary block">
										Add to Cart
									</button>
								</li>
							</ul>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProductScreen;

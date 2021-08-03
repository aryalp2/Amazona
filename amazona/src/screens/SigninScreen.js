import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signIn } from "../redux/action/userAction";
import LoadingBox from "../components/LoadingBox";
import Message from "../components/Message";

const SigninScreen = (props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const redirect = props.location.search
		? props.location.search.split("=")[1]
		: "/";

	const userSignIn = useSelector((state) => state.userReducer);
	const { userInfo, loading, error } = userSignIn;

	const dispatch = useDispatch();
	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(signIn(email, password));
	};

	useEffect(() => {
		if (userInfo) {
			props.history.push(redirect);
		}
	}, [userInfo, redirect, props.history]);

	return (
		<div>
			<form className="form" onSubmit={submitHandler}>
				<div>
					<h1>Sign In</h1>
				</div>
				{loading && <LoadingBox></LoadingBox>}
				{error && <Message variant="danger">{error}</Message>}
				<div>
					<label htmlFor="email">Email Address</label>
					<input
						type="email"
						placeholder="Enter Email"
						id="email"
						required
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						placeholder="Enter Password"
						id="password"
						required
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div>
					<label />
					<button className="primary" type="submit">
						Sign In
					</button>
				</div>
				<div>
					<label />
					<div>
						New Customer ?{" "}
						<Link to="/register"> Create your account </Link>
					</div>
				</div>
			</form>
		</div>
	);
};

export default SigninScreen;

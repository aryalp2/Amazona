import React, { useState } from "react";
import { Link } from "react-router-dom";

const SigninScreen = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const submitHandler = (e) => {
		e.preventDefault();
		// TODO: Sign in action
	};

	return (
		<div>
			<form className="form" onSubmit={submitHandler}>
				<div>
					<h1>Sign In</h1>
				</div>
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

import "./index.css";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SigninScreen from "./screens/SigninScreen";
import { signOut } from "./redux/action/userAction";
function App() {
	const cart = useSelector((state) => state.cartReducer);
	const { cartItems } = cart;
	const dispatch = useDispatch();
	const userSignIn = useSelector((state) => state.userReducer);
	const { userInfo } = userSignIn;
	const signOutHandler = () => {
		dispatch(signOut());
	};
	return (
		<BrowserRouter>
			<div className="App">
				<div className="grid-container">
					<header className="row">
						<div>
							<Link className="brand" to="/">
								amazona
							</Link>
						</div>
						<div>
							<Link to="/cart">
								Cart
								{cartItems?.length > 0 && (
									<span className="badge">
										{cartItems?.length}
									</span>
								)}
							</Link>
							{userInfo ? (
								<div className="dropdown">
									<Link to="#">
										{userInfo.name}{" "}
										<i className="fa fa-caret-down"></i>{" "}
										&nbsp;
									</Link>
									<ul className="dropdown-content">
										<li>
											<Link
												to="#signout"
												onClick={signOutHandler}
											>
												Sign Out
											</Link>
										</li>
									</ul>
								</div>
							) : (
								<Link to="/signin">Sign In</Link>
							)}
						</div>
					</header>
					<main>
						<Route
							path="/product/:id"
							component={ProductScreen}
						></Route>
						<Route path="/cart/:id?" component={CartScreen}></Route>
						<Route path="/signin" component={SigninScreen}></Route>
						<Route path="/" component={HomeScreen} exact></Route>
					</main>
					<footer className="row center">All right reserved</footer>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;

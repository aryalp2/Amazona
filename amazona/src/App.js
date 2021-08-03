import "./index.css";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SigninScreen from "./screens/SigninScreen";
function App() {
	const cart = useSelector((state) => state.cartReducer);
	const { cartItems } = cart;
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
							<Link to="/signin">Sign In</Link>
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

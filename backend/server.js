import express from "express";
import data from "./data.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
	res.send("Server is ready");
});

app.get("/api/products", (req, res) => {
	res.status(200).send(data.products);
});

app.get("/api/products/:id", (req, res) => {
	const product = data.products.find((x) => x._id === req.params.id);
	if (product) {
		res.status(200).send(product);
	} else {
		res.status(404).send({ message: "Product not found" });
	}
});

app.listen(port, () => {
	console.log(`Serve at http://localhost:${port}`);
});

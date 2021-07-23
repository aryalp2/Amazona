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
	res.send(data.products);
});

app.listen(port, () => {
	console.log(`Serve at http://localhost:${port}`);
});

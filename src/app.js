import express from "express";

const app = express();

const port = process.env.PORT || 3001;

app.get("/", (_, res) => {
	res.send("Hello World!");
});

app.use(express.json());

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});

import express from "express";

const app = express();
import loginRoute from "./routes/users/login.js";
const port = process.env.PORT || 3001;

app.use(express.json());

app.get("/", (_, res) => {
	res.send("Hello World!");
});

app.use("/api/login", loginRoute);

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});

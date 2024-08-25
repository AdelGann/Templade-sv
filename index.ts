import express from "express";

import LoginRouter from "./src/Routes/User/Login";

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json()); // Midleware que transforma el req.body a json

app.get("/", (_, res: any) => {
	console.log("hello world");
	res.send("hello world");
});

app.use("/api/login", LoginRouter);

app.listen(PORT, () => {
	console.log(`listening on port ${PORT} `);
});

import express from "express";

const router = express.Router();

router.get("/", (_, res) => {
	res.send("Test");
});

router.post("/", (_, res) => {
	res.send();
});

export default router;

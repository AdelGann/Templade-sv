import { Router } from "express";

const router = new Router();

router.get("/", (req, res) => {
	res.send("tested correctly");
});
router.post("/", (req, res) => {
	res.send("tested correctly");
});

export default router;

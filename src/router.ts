import { Router } from "express";

const router: Router = Router();

router.get("/", (req, res) => {
  res.json({ msg: "Hello Word" });
});

export default router;

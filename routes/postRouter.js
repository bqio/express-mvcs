import express from "express";
import postController from "../controllers/postController.js";

const router = express.Router();

router.get("/", postController.getAll);
router.post("/", postController.create);
router.put("/", postController.update);

export default router;

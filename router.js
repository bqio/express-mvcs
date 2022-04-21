import express from "express";
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";
import postRouter from "./routes/postRouter.js";

import tokenMiddleware from "./middlewares/tokenMiddleware.js";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/users", tokenMiddleware, userRouter);
router.use("/posts", tokenMiddleware, postRouter);

export default router;

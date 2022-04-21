import "dotenv/config";
import express from "express";
import router from "./router.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(router);
app.use(errorMiddleware);

app.listen(PORT, () => console.log("Server has been started."));

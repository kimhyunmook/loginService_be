import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes";
dotenv.config();

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use("/api", router);
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`PORT: ${port} listen`));

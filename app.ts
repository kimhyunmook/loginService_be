import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes";
import { setAuthCookies } from "./lib/auth";
dotenv.config();

const app = express();
app.use(
  cors({
    origin: "*",
  })
);

app.use("/api", router);
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`${port}`));

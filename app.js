import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();
app.use(cors({}));
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`${port}`));

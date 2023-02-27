import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import globalRouter from "./routes/global";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use("/global", globalRouter);

app.listen(port, () => {
  mongoose.connect("mongodb://127.0.0.1:27017/hiu").then(async () => {
    console.log("Database Connected !");
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
});

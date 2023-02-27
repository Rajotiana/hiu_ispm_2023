import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import globalRouter from "./routes/global";
import cors from "cors";
import adminRouter from "./routes/admin";
import studentRouter from "./routes/student";
import apiRouter from "./routes/routeAuth";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json())
app.use(express.static('public'))


app.get("/courses/:filename",(req:Request,res:Response)=>{
  if (!req.params.filename) return res.status(400).json({ error: { message: "Filename should be given in params" } });
  streamMedia(req, res, "video", req.params.filename);
})

app.use(express.json());

app.use("/admin", adminRouter);
app.use("/student", studentRouter);
app.use(apiRouter);
app.use("/global", globalRouter);

app.listen(port, () => {
  mongoose.connect("mongodb://127.0.0.1:27017/hiu").then(async () => {
    console.log("Database Connected !");
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
});

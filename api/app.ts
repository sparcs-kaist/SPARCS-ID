import { nodePort } from "./config/config.js";
import express, { Request, Response, NextFunction } from "express";
const app = express();
import bodyParser from "body-parser";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello, world!");
});

app.listen(nodePort, () => {
  console.log("app started!");
});

export default app;

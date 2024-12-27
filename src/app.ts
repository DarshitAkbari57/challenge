import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import "./config/Database";
import ProductRouter from "./routes/Product";
const PORT = 8082;
const app: Application = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  res.send("HELLO");
});

app.use("/v1/product/", ProductRouter);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`START ON PORT ${PORT}`);
});

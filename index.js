import express from "express";
import { APP_PORT } from "./config";
import connectDB from "./config/db";
const PORT = process.env.PORT || APP_PORT;
connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("hii");
});

app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});

const dotenv = require("dotenv");
dotenv.config();
require("dotenv").config();
const express = require("express");
const connectToDb = require("./Db/db");
const app = express();
const port = process.env.PORT || 3000;
const userRouter = require("./Routes/userRouter");

app.use(express.json());
connectToDb();

app.get("/", (req, res) => {
  res.send("Hey from new server to restart");
});

app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Server running in the ${port}`);
});

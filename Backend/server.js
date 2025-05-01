const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const connectToDb = require("./Db/db");
const app = express();
const port = process.env.PORT || 3000;

// Import routers
const userRouter = require("./Routes/userRouter");
const adminRouter = require("./Routes/adminRouter"); // ✅ Add this

app.use(express.json());
connectToDb();

// Test route
app.get("/", (req, res) => {
  res.send("Hey from new server to restart");
});

// User routes
app.use("/user", userRouter);

// Admin routes
app.use("/admin", adminRouter); // ✅ Add this

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const express = require("express");
const router = express.Router();
const verifyToken = require("../middlesware/auth");
const {
  registerUser,
  getUsers,
  loginUser,
  getUserProfile,
} = require("../Controllers/userController");

// for registrtaion
router.post("/register", registerUser);

// for get all Users
router.get("/getUsers", getUsers);

// For login
router.post("/login", loginUser);

// For profile
router.get("/profile", verifyToken, getUserProfile);

module.exports = router;

// backend/middleware/auth.js
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModels");

const verifyToken = async (req, res, next) => {
  const token = req.headers?.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ msg: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRETE_KEY);
    const user = await userModel.findById(decoded.id);

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    req.user = user; // full user including role
    next();
  } catch (err) {
    return res.status(401).json({ msg: "Invalid token" });
  }
};

const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ msg: "Access denied: Admins only" });
  }
  next();
};

module.exports = { verifyToken, isAdmin };

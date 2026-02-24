const express = require("express");
const { signup, login } = require("../controller/authcontroler");
const validateInput = require("../middleware/validation");
const protect = require("../middleware/authmiddle");

const router = express.Router();

router.post("/signup", validateInput, signup);
router.post("/login", validateInput, login);

// Protected Route Example
router.get("/protected", protect, (req, res) => {
  res.json({ message: "Protected route accessed", userId: req.user });
});

module.exports = router;
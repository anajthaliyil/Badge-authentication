const express = require("express");
const protect = require("../middleware/authmiddle");
const { profile } = require("../controller/usercontroller");


const router = express.Router();

// Protected Route Example
router.get("/profile", protect,profile)



module.exports = router;